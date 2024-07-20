'use client';

import styles from './PartFilter.module.scss';
import FilterCheckboxes from '@/components/parts/part/partFilter/filterCheckboxes/filterCheckboxes';
import { FilterConfig } from '@/data/partsConfig';

const PartFilter = ({ filterConfigs, onFilterChange }: PartFilterParams) => {
  return (
    <div className={styles.partFilterContainer}>
      {filterConfigs.map(filterConfig => (
        <FilterCheckboxes
          key={filterConfig.name}
          filterName={filterConfig.name}
          options={filterConfig.options}
          onFilterChange={onFilterChange}
        />
      ))}
    </div>
  );
};

interface PartFilterParams {
  filterConfigs: FilterConfig[];
  onFilterChange: (filterName: string, optionValue: string) => void;
}

export default PartFilter;
