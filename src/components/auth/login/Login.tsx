'use client';

import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

import styles from './Login.module.scss';
import Input from '@/components/form/input/Input';
import Button from '@/components/form/button/Button';
import FormTabs from '@/components/form/formTabs/FormTabs';

const tabs: Array<[string, string, boolean]> = [
  ['/login', 'login', true],
  ['/register', 'register', false],
];

const Login = () => {
  const mutation = useMutation({
    mutationFn: (data: RequestPayload) => {
      return axios.post('http://0.0.0.0:8888/v1/auth/token', data);
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
        <Input id='email' type='email' placeholder='email' />
      </div>

      <div className={styles.formSection}>
        <span>password</span>
        <Input id='password' type='password' placeholder='password' />
        <Link href='/forgot-password' className={styles.forgotPassword}>
          forgot password?
        </Link>
      </div>

      <Button type='submit' text='login' />
    </form>
  );
};

interface RequestPayload {
  email: string;
  password: string;
}

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default Login;
