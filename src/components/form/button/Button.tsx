import styles from './Button.module.scss';

const Button = ({ type, text }: ButtonProps) => {
  return (
    <button type={type} className={styles.button}>
      {text}
    </button>
  );
};

interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined;
  text: string;
}

export default Button;
