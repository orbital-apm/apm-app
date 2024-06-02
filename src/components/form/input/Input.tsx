import styles from './Input.module.scss';

const Input = ({ id, type, placeholder }: InputProps) => {
  return <input id={id} type={type} placeholder={placeholder} className={styles.input} />;
};

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
}

export default Input;
