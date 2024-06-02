import Link from 'next/link';

import styles from './Login.module.scss';
import Input from '@/components/form/input/Input';
import Button from '@/components/form/button/Button';
import FormTabs from '@/components/form/formTabs/FormTabs';

const tabs: Array<[string, string, boolean]> = [
  ['/login', 'login', true],
  ['/register', 'register', false],
];

const Login = () => {
  return (
    <form className={styles.loginContainer}>
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

export default Login;
