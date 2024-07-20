'use client';

import styles from './filterCheckboxes.module.scss';

const FilterCheckboxes = ({ filterName, options, onFilterChange }: FilterCheckboxesParams) => {
  return (
    <div className={styles.filterCheckboxesContainer}>
      <span className={styles.filterCheckboxesFilterName}>{filterName}</span>

      {options.map(optionValue => (
        <label key={optionValue} className={styles.filterCheckboxContainer}>
          <input type='checkbox' onChange={() => onFilterChange(filterName, optionValue)} />
          <span>{optionValue}</span>
        </label>
      ))}
    </div>
  );
};

interface FilterCheckboxesParams {
  filterName: string;
  options: string[];
  onFilterChange: (filterName: string, optionValue: string) => void;
}

export default FilterCheckboxes;
