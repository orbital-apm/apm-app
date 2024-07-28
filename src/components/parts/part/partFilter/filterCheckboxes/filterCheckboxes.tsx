'use client';

import styles from './filterCheckboxes.module.scss';
import { FilterConfig } from '@/data/partsConfig';

const FilterCheckboxes = ({ filterConfig, onFilterChange }: FilterCheckboxesParams) => {
  return (
    <div className={styles.filterCheckboxesContainer}>
      <span className={styles.filterCheckboxesFilterName}>{filterConfig.name}</span>

      {filterConfig.options.map(option => (
        <label key={option.name} className={styles.filterCheckboxContainer}>
          <input type='checkbox' onChange={() => onFilterChange(filterConfig.queryParamKey, option.value.toString())} />
          <span>{option.name}</span>
        </label>
      ))}
    </div>
  );
};

interface FilterCheckboxesParams {
  filterConfig: FilterConfig;
  onFilterChange: (filterName: string, optionValue: string) => void;
}

export default FilterCheckboxes;
