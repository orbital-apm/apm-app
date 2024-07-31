'use client';

import Image from 'next/image';

import SearchImage from '@/assets/images/icons/search.svg';
import styles from './SearchBar.module.scss';
import React from 'react';

const SearchBar = ({ searchFn }: SearchBarProps) => {
  const submitHandler = (event: React.FormEvent<SearchFormElement>) => {
    event.preventDefault();
    searchFn(event.currentTarget.elements.searchCriteria.value);
  };

  return (
    <form className={styles.searchContainer} onSubmit={submitHandler}>
      <input id='searchCriteria' className={styles.searchInput} placeholder='' />
      <button type='submit' className={styles.searchButton}>
        <Image src={SearchImage} alt='Search' className={styles.searchIcon} />
      </button>
    </form>
  );
};

interface SearchBarProps {
  searchFn: (searchCriteria: string) => void;
}

interface FormElements extends HTMLFormControlsCollection {
  searchCriteria: HTMLInputElement;
}

interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default SearchBar;
