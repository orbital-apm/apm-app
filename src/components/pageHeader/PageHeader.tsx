import Link from 'next/link';

import SearchBar from '@/components/pageHeader/searchBar/SearchBar';
import Navbar from '@/components/pageHeader/navbar/Navbar';
import styles from './PageHeader.module.scss';
import IconsContainer from '@/components/pageHeader/iconsContainer/IconsContainer';

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

        <IconsContainer />
      </div>

      <hr className={styles.headerSeparator} />

      <Navbar />
    </header>
  );
};

export default PageHeader;
