import styles from './Input.module.scss';

const Input = ({ id, type, placeholder, required }: InputProps) => {
  return <input id={id} type={type} placeholder={placeholder} className={styles.input} required={required} />;
};

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export default Input;
