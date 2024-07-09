'use client';

import styles from './PartFilter.module.scss';
import FilterCheckboxes from '@/components/parts/part/partFilter/filterCheckboxes/filterCheckboxes';

const PartFilter = () => {
  return (
    <div className={styles.partFilterContainer}>
      <FilterCheckboxes
        filterName={'Availability'}
        options={{ 'in stock': false, 'out of stock': false }}
        onFilterChange={(filterName: string, optionValue: string) => alert('hi')}
      />

      <FilterCheckboxes
        filterName={'Availability'}
        options={{ 'in stock': false, 'out of stock': false }}
        onFilterChange={(filterName: string, optionValue: string) => alert('hi')}
      />
    </div>
  );
};

export default PartFilter;
