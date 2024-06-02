import Dropdown from '@/components/navbar/dropdown/Dropdown';
import styles from './Navbar.module.scss';
import { NavbarItem, navbarData } from '@/data/navbarData';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      {navbarData.map((navbarItem: NavbarItem) => (
        <Dropdown key={navbarItem.label[1]} label={navbarItem.label} dropdownContent={navbarItem.dropdownContent} />
      ))}
    </div>
  );
};

export default Navbar;
