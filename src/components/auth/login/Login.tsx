'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import styles from './Login.module.scss';
import Input from '@/components/form/input/Input';
import Button from '@/components/form/button/Button';
import FormTabs from '@/components/form/formTabs/FormTabs';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setIsAuthenticated } from '@/slices/authSlice';

const tabs: Array<[string, string, boolean]> = [
  ['/login', 'login', true],
  ['/register', 'register', false],
];

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const mutation = useMutation({
    mutationFn: (data: RequestPayload) => {
      return axios.post(`${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}/v1/auth/token`, data);
    },

    onSuccess: (response: AxiosResponse<ResponsePayload>) => {
      Cookies.set('authToken', response.data.access_token, { expires: 7, secure: true });
      dispatch(setIsAuthenticated(true));
      router.back();
    },

    onError: error => {
      setErrorMessage('Login unsuccessful.')
      console.log(`Login failed: ${error}`);
    },
  });

  const handleSubmit = (event: React.FormEvent<LoginFormElement>) => {
    event.preventDefault();

    const formData = event.currentTarget.elements;
    const requestPayload: RequestPayload = {
      email: formData.email.value,
      password: formData.password.value,
    };

    mutation.mutate(requestPayload);
  };

  return (
    <form className={styles.loginContainer} onSubmit={handleSubmit}>
      <FormTabs tabs={tabs} />

      <div className={styles.formSection}>
        <span>email</span>
        <Input id='email' type='email' placeholder='email' required={true} />
      </div>

      <div className={styles.formSection}>
        <span>password</span>
        <Input id='password' type='password' placeholder='password' required={true} />
        <Link href='/forgot-password' className={styles.forgotPassword}>
          forgot password?
        </Link>
      </div>

      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}

      <Button type='submit' text='login' />
    </form>
  );
};

interface RequestPayload {
  email: string;
  password: string;
}

interface ResponsePayload {
  access_token: string;
  token_type: string;
}

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default Login;
