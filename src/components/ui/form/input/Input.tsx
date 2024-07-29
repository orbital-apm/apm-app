import styles from './Input.module.scss';
import { useState } from 'react';

const Input = ({ id, type, placeholder, required, value, onChange }: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (type === 'number') {
      // Allow only numbers and up to one decimal point
      inputValue = inputValue.replace(/[^0-9.]/g, '');

      // Ensure only one decimal point
      const parts = inputValue.split('.');
      if (parts.length > 2) {
        parts.pop();
        inputValue = parts.join('.');
      }

      // Limit to two decimal places
      if (parts[1] && parts[1].length > 2) {
        inputValue = parts[0] + '.' + parts[1].slice(0, 2);
      }
    }

    setInputValue(inputValue);
  };

  return (
    <input
      id={id}
      type={type === 'number' ? 'text' : type}
      placeholder={placeholder}
      value={value || inputValue}
      onChange={onChange || handleChange}
      required={required}
      className={styles.input}
    />
  );
};

// Todo: Cleanup
interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default Input;
