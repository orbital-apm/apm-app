'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import styles from './Part.module.scss';
import PartCard from '@/components/parts/part/partCard/PartCard';
import PartFilter from '@/components/parts/part/partFilter/PartFilter';
import { PartConfig } from '@/data/partsConfig';
import SearchBar from '@/components/pageHeader/searchBar/SearchBar';

// Todo: Cleanup
const Part = ({ partConfig }: PartProps) => {
  const [parts, setParts] = useState<PartModel[]>([]);
  const [filters, setFilters] = useState({} as Record<string, string[]>);
  const [searchCriteria, setSearchCriteria] = useState('');
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  const onSearchSubmit = (searchCriteria: string) => {
    setSearchCriteria(searchCriteria);
    setPage(1);
    setParts([]);
  };

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
    setPage(1);
    setParts([]);
  };

  const mutation = useMutation({
    mutationFn: (data: RequestParams) => {
      const transformedData = Object.entries(data.filters).reduce(
        (acc, [key, value]) => {
          acc[key] = value.join(',');
          return acc;
        },
        {} as Record<string, string>
      );

      return axios.get(`${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}${partConfig.path}`, {
        params: { ...transformedData, custom_search: data.searchCriteria, page: data.page }
      });
    },

    onSuccess: (response: AxiosResponse<ResponsePayload>) => {
      setParts(prevParts => [
        ...prevParts,
        ...response.data.items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          imageUrl: item.img_url,
          primaryDetail: 'temporary'
        }))
      ]);
    },

    onError: error => {
      console.log('failure');
      console.log(error);
    }
  });

  const lastPartElementRef = useCallback((node: HTMLDivElement | null) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    mutation.mutate({ filters, searchCriteria, page });
  }, [filters, searchCriteria, page]);

  return (
    <div className={styles.partContainer}>
      <div className={styles.partFilter}>
        <PartFilter filterConfigs={partConfig.filters} onFilterChange={onFilterChange} />
      </div>

      <div className={styles.partCardsAndSearch}>
        <SearchBar searchFn={onSearchSubmit} />
        <div className={styles.partCardsContainer}>
          {parts.map((part, index) => (
            <div
              key={index}
              ref={index === parts.length - 1 ? lastPartElementRef : null}
              className={styles.cardContainer}
            >
              <PartCard type={partConfig.type} part={part} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface PartProps {
  partConfig: PartConfig;
}

interface RequestParams {
  filters: Record<string, string[]>;
  searchCriteria: string;
  page: number;
}

interface ItemModel {
  id: string;
  name: string;
  price: number;
  img_url: string;
}

interface ResponsePayload {
  items: ItemModel[];
}

export interface PartModel {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  primaryDetail: string;
}

export default Part;
