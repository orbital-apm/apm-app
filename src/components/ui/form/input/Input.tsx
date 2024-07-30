import styles from './Input.module.scss';

const Input = ({ id, type, placeholder, required, value, onChange }: InputProps) => {
  return <input 
          id={id} 
          type={type} 
          placeholder={placeholder} 
          className={styles.input} 
          required={required}
          value={value}
          onChange={onChange} />;
};

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value?: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default Input;
