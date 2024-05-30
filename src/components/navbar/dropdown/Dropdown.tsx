import Link from 'next/link';

import styles from './Dropdown.module.scss';

const Dropdown = ({ labelText, dropdownContent }: DropdownProps) => {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownTextContainer}>
        <Link href='/'>{labelText}</Link>
        <span className={styles.arrow} />
      </div>

      <ul className={styles.dropdownContent}>
        {dropdownContent.map(([redirectPath, text]) => (
          <li key={text}>
            <Link href={redirectPath}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface DropdownProps {
  labelText: string;
  dropdownContent: Array<[string, string]>;
}

export default Dropdown;
