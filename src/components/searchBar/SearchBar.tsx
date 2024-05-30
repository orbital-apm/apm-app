'use client';

import Image from 'next/image';

import SearchImage from '@/assets/images/icons/search.svg';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} placeholder='' />
      <button className={styles.searchButton} onClick={() => alert('hello')}>
        <Image src={SearchImage} alt='Search' className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;

// Todo: Separate button icon into new component and make that the client component instead.
