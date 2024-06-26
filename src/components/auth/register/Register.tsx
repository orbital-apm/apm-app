'use client';

import React from 'react';
import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import styles from './Register.module.scss';
import Input from '@/components/form/input/Input';
import Button from '@/components/form/button/Button';
import FormTabs from '@/components/form/formTabs/FormTabs';

const tabs: Array<[string, string, boolean]> = [
  ['/login', 'login', false],
  ['/register', 'register', true],
];

const validatePassword = (password: String, confirmPassword: string) => {
  // TODO: Add password validation
  return password === confirmPassword;
};

const Register = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: RequestPayload) => {
      return axios.post(`${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}/v1/users`, data);
    },

    onSuccess: (response: AxiosResponse<ResponsePayload>) => {
      Cookies.set('authToken', response.data.access_token, { expires: 7, secure: true });
      router.back();
    },

    onError: error => {
      // TODO: Handle errors
      console.log(`Register failed: ${error}`);
    },
  });

  const handleSubmit = (event: React.FormEvent<RegisterFormElement>) => {
    event.preventDefault();

    const formData = event.currentTarget.elements;

    if (!validatePassword(formData.password.value, formData.confirmPassword.value)) {
      // TODO: Handle error
    } else {
      const requestPayload: RequestPayload = {
        email: formData.email.value,
        username: formData.username.value,
        password: formData.password.value,
      };

      mutation.mutate(requestPayload);
    }
  };

  return (
    <form className={styles.registerContainer} onSubmit={handleSubmit}>
      <FormTabs tabs={tabs} />

      <div className={styles.formSection}>
        <span>email</span>
        <Input id='email' type='email' placeholder='email' />
      </div>

      <div className={styles.formSection}>
        <span>username</span>
        <Input id='username' type='username' placeholder='username' />
      </div>

      <div className={styles.formSection}>
        <span>password</span>
        <Input id='password' type='password' placeholder='password' />
      </div>

      <div className={styles.formSection}>
        <span>confirm password</span>
        <Input id='confirmPassword' type='password' placeholder='confirm password' />
      </div>

      <Button type='submit' text='register' />
    </form>
  );
};

interface RequestPayload {
  email: string;
  username: string;
  password: string;
}

interface ResponsePayload {
  access_token: string;
  token_type: string;
}

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  username: HTMLInputElement;
  password: HTMLInputElement;
  confirmPassword: HTMLInputElement;
}

interface RegisterFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default Register;
