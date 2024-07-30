'use client';

import Image from 'next/image';

import styles from './Marketplace.module.scss';
import ArrowDown from '@/assets/images/icons/arrow-down.svg';
import RowCard from '@/components/marketplace/rowCard/RowCard';
import { useAppSelector } from '@/hooks/useAppSelector';
import Button from '@/components/ui/form/button/Button';
import Link from 'next/link';

const Marketplace = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

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
        <RowCard name='hi' description='bye' linkDest='/' price={2.125} />
        <RowCard name='hi' description='bye' linkDest='/' price={2.125} />
      </div>
    </div>
  );
};

export default Marketplace;
