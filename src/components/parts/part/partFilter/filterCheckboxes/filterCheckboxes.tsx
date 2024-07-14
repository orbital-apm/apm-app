'use client';

import styles from './filterCheckboxes.module.scss';

const FilterCheckboxes = ({ filterName, options, onFilterChange }: FilterCheckboxesParams) => {
  return (
    <div className={styles.filterCheckboxesContainer}>
      <span className={styles.filterCheckboxesFilterName}>{filterName}</span>

      {Object.entries(options).map(([optionValue, isChecked]) => (
        <label key={optionValue} className={styles.filterCheckboxContainer}>
          <input type='checkbox' checked={isChecked} onChange={() => onFilterChange(filterName, optionValue)} />
          <span>{optionValue}</span>
        </label>
      ))}
    </div>
  );
};

interface FilterCheckboxesParams {
  filterName: string;
  options: Record<string, boolean>;
  onFilterChange: (filterName: string, optionValue: string) => void;
}

export default FilterCheckboxes;
