import Link from 'next/link'

import CartImage from '@/assets/images/icons/shopping-cart.svg';
import UserImage from '@/assets/images/icons/user.svg';
import ClickableIcon from '@/components/clickableIcon/ClickableIcon';
import SearchBar from '@/components/searchBar/SearchBar';
import Navbar from '@/components/navbar/Navbar';
import styles from './PageHeader.module.scss';

const PageHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerRowContainer}>
        <Link href='/'>
          <h1>actions per minute.</h1>
        </Link>

        <div className={styles.searchBarContainer}>
          <SearchBar />
        </div>

        <div className={styles.iconsContainer}>
          <ClickableIcon imgSrc={UserImage} altText='User' linkDest='/user' />
          <ClickableIcon imgSrc={CartImage} altText='Cart' linkDest='/cart' />
        </div>
      </div>

      <hr className={styles.headerSeparator} />

      <Navbar />
    </header>
  );
};

export default PageHeader;
