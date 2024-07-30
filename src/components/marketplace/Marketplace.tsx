'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import styles from './Marketplace.module.scss';
import ArrowDown from '@/assets/images/icons/arrow-down.svg';
import RowCard from '@/components/marketplace/rowCard/RowCard';
import { useAppSelector } from '@/hooks/useAppSelector';
import Button from '@/components/ui/form/button/Button';

const Marketplace = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  const { data } = useQuery<ListingsResponse>({
    queryKey: ['listings'],
    queryFn: async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}/v1/listings`);
      return response.data;
    }
  });

  return (
    <div className={styles.marketplaceContainer}>
      <h2 className='title'>marketplace.</h2>

      <Image src={ArrowDown} alt='Arrow down' />

      {isAuthenticated && (
        <>
          <Link href='/marketplace/listings/new'>
            <Button type='button' text='create listing' />
          </Link>

          <span>or</span>

          <h3 className={styles.listingsTitle}>browse listings</h3>
        </>
      )}

      <div className={styles.listingsContainer}>
        {data?.items.map(listing => (
          <RowCard
            key={listing.id}
            name={listing.title}
            description={listing.description}
            linkDest='/marketplace'
            price={listing.price}
          />
        ))}
      </div>
    </div>
  );
};

interface Listing {
  id: string;
  title: string;
  description: string;
  condition: number;
  part_type: string[];
  price: number;
}

interface ListingsResponse {
  items: Listing[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export default Marketplace;
