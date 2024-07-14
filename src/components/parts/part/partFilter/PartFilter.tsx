'use client';

import styles from './PartFilter.module.scss';
import FilterCheckboxes from '@/components/parts/part/partFilter/filterCheckboxes/filterCheckboxes';

const PartFilter = () => {
  return (
    <div className={styles.partFilterContainer}>
      <FilterCheckboxes
        filterName={'Placeholder'}
        options={{ 'in stock': false, 'out of stock': false }}
        onFilterChange={(filterName: string, optionValue: string) => alert(`${filterName}, ${optionValue}`)}
      />

      <FilterCheckboxes
        filterName={'Placeholder'}
        options={{ hotel: false, trivago: false }}
        onFilterChange={(filterName: string, optionValue: string) => alert(`${filterName}, ${optionValue}`)}
      />
    </div>
  );
};

export default PartFilter;
