import Link from 'next/link';

import { NavbarItem } from '@/data/navbarData'
import styles from './Dropdown.module.scss';

const Dropdown = ({ label, dropdownContent }: NavbarItem) => {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownTextContainer}>
        <Link href={label[0]}>{label[1]}</Link>
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

export default Dropdown;
