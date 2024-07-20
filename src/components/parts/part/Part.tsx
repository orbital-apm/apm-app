'use client';

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import styles from './Part.module.scss';
import PartCard from '@/components/parts/part/partCard/PartCard';
import PartFilter from '@/components/parts/part/partFilter/PartFilter';
import { PartConfig } from '@/data/partsConfig';

const Part = ({ partConfig }: PartParams) => {
  const [parts, setParts] = useState([]);
  const [filters, setFilters] = useState({} as Record<string, string[]>);

  const onFilterChange = (filterName: string, optionValue: string) => {
    setFilters(prevFilters => {
      const currentValues = prevFilters[filterName] || [];
      let newValues;

      if (currentValues.includes(optionValue)) {
        newValues = currentValues.filter(value => value !== optionValue);
      } else {
        newValues = [...currentValues, optionValue];
      }

      if (newValues.length === 0) {
        const newFilters = { ...prevFilters };
        delete newFilters[filterName];
        return newFilters;
      }

      return {
        ...prevFilters,
        [filterName]: newValues
      };
    });
  };

  const mutation = useMutation({
    mutationFn: (data: RequestPayload) => {
      return axios.get(`${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}${partConfig.path}`, { params: data });
    },

    onSuccess: response => {
      console.log(filters);
      alert('success');
    },

    onError: error => {
      console.log(filters);
      alert('failure');
    }
  });

  useEffect(() => {
    mutation.mutate({ filters: filters });
  }, [filters]);

  return (
    <div className={styles.partContainer}>
      <div className={styles.partFilter}>
        <PartFilter filterConfigs={partConfig.filters} onFilterChange={onFilterChange} />
      </div>

      <div className={styles.partCardsContainer}>
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
      </div>
    </div>
  );
};

interface PartParams {
  partConfig: PartConfig;
}

interface RequestPayload {
  filters: Record<string, string>;
}

export default Part;
