'use client';

import Image from 'next/image';

import styles from './Marketplace.module.scss';
import ArrowDown from '@/assets/images/icons/arrow-down.svg';
import RowCard from '@/components/marketplace/rowCard/RowCard';
import { useAppSelector } from '@/hooks/useAppSelector';
import Button from '@/components/ui/form/button/Button';

const Marketplace = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return (
    <div className={styles.marketplaceContainer}>
      <h2 className='title'>marketplace.</h2>

      <Image src={ArrowDown} alt='Arrow down' />

      {isAuthenticated && (
        <>
          <Button type='button' text='create a listing' />
          <span>or</span>
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
