import styles from './Textarea.module.scss';

const Textarea = ({ id, rows, placeholder, required }: TextareaProps) => {
  return (
    <textarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      required={required}
      className={styles.textarea}
    />
  );
};

interface TextareaProps {
  id: string;
  rows: number;
  placeholder: string;
  required: boolean;
}

export default Textarea;
