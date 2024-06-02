import styles from './FormTab.module.scss';
import Link from 'next/link';

const FormTab = ({ redirectPath, text, selected }: FormTabProps) => {
  return (
    <Link href={redirectPath} className={styles.formTabContainer}>
      <span className={selected ? styles.formTabTextSelected : styles.formTabText}>{text}</span>
    </Link>
  );
};

interface FormTabProps {
  redirectPath: string;
  text: string;
  selected: boolean;
}

export default FormTab;
