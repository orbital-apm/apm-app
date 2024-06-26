import styles from './Register.module.scss';
import Input from '@/components/form/input/Input';
import Button from '@/components/form/button/Button';
import FormTabs from '@/components/form/formTabs/FormTabs';

const tabs: Array<[string, string, boolean]> = [
  ['/login', 'login', false],
  ['/register', 'register', true],
];

const Login = () => {
  return (
    <form className={styles.registerContainer}>
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
        <Input id='confirm-password' type='password' placeholder='confirm password' />
      </div>

      <Button type='submit' text='register' />
    </form>
  );
};

export default Login;
