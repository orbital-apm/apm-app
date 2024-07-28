'use client';

import styles from './Button.module.scss';

const Button = ({ type, text, onClickFn }: ButtonProps) => {
  return (
    <button type={type} className={styles.button} onClick={onClickFn}>
      {text}
    </button>
  );
};

interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined;
  text: string;
  onClickFn?: () => void;
}

export default Button;
