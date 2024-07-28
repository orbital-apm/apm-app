'use client';

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import styles from './Part.module.scss';
import PartCard from '@/components/parts/part/partCard/PartCard';
import PartFilter from '@/components/parts/part/partFilter/PartFilter';
import { PartConfig } from '@/data/partsConfig';

const Part = ({ partConfig }: PartProps) => {
  const [parts, setParts] = useState<PartModel[]>([]);
  const [filters, setFilters] = useState({} as Record<string, string[]>);

  const onFilterChange = (filterKey: string, optionValue: string) => {
    setFilters(prevFilters => {
      const currentValues = prevFilters[filterKey] || [];
      let newValues;

      if (currentValues.includes(optionValue)) {
        newValues = currentValues.filter(value => value !== optionValue);
      } else {
        newValues = [...currentValues, optionValue];
      }

      if (newValues.length === 0) {
        const newFilters = { ...prevFilters };
        delete newFilters[filterKey];
        return newFilters;
      }

      return {
        ...prevFilters,
        [filterKey]: newValues
      };
    });
  };

  const mutation = useMutation({
    mutationFn: (data: RequestParams) => {
      const transformedData = Object.entries(data).reduce((acc, [key, value]) => {
        acc[key] = value.join(',');
        return acc;
      }, {} as Record<string, string>);

      return axios.get(`${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}${partConfig.path}`, {
        params: transformedData
      });
    },

    onSuccess: (response: AxiosResponse<ResponsePayload>) => {
      setParts(
        response.data.items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          primaryDetail: 'temporary'
        }))
      );
    },

    onError: error => {
      console.log('failure');
    }
  });

  useEffect(() => {
    mutation.mutate(filters);
  }, [filters]);

  return (
    <div className={styles.partContainer}>
      <div className={styles.partFilter}>
        <PartFilter filterConfigs={partConfig.filters} onFilterChange={onFilterChange} />
      </div>

      <div className={styles.partCardsContainer}>
        {parts.map(part => (
          <PartCard key={part.id} name={part.name} price={part.price} primaryDetail={part.primaryDetail} />
        ))}
      </div>
    </div>
  );
};

interface PartProps {
  partConfig: PartConfig;
}

type RequestParams = Record<string, string[]>;

interface ItemModel {
  id: string;
  name: string;
  price: number;
}

interface ResponsePayload {
  items: ItemModel[];
}

interface PartModel {
  id: string;
  name: string;
  price: number;
  primaryDetail: string;
}

export default Part;
