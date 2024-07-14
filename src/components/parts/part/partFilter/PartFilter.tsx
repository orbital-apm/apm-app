'use client';

import styles from './PartFilter.module.scss';
import FilterCheckboxes from '@/components/parts/part/partFilter/filterCheckboxes/filterCheckboxes';
import { FilterConfig } from '@/data/partsConfig';

function listToRecord<T extends string>(list: T[]): Record<T, boolean> {
  return list.reduce(
    (acc, item) => {
      acc[item] = false;
      return acc;
    },
    {} as Record<T, boolean>,
  );
}

const PartFilter = ({ filterConfigs }: PartFilterParams) => {
  return (
    <div className={styles.partFilterContainer}>
      {filterConfigs.map(filterConfig => (
        <FilterCheckboxes
          key={filterConfig.name}
          filterName={filterConfig.name}
          options={listToRecord(filterConfig.options)}
          onFilterChange={(filterName: string, optionValue: string) => alert(`${filterName}, ${optionValue}`)}
        />
      ))}
    </div>
  );
};

interface PartFilterParams {
  filterConfigs: FilterConfig[];
}

export default PartFilter;
