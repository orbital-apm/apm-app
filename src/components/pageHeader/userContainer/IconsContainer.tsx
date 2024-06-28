'use client';

import Link from 'next/link';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

import styles from './IconsContainer.module.scss';
import CartImage from '@/assets/images/icons/shopping-cart.svg';
import UserImage from '@/assets/images/icons/user.svg';
import ClickableIcon from '@/components/clickableIcon/ClickableIcon';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setIsAuthenticated } from '@/slices/authSlice';

const IconsContainer = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    const authToken = Cookies.get('authToken');
    dispatch(setIsAuthenticated(!!authToken));
  }, [dispatch]);

  return (
    <div className={styles.iconsContainer}>
      {!isAuthenticated ? (
        <>
          <Link href='/login'>Login</Link>
          <span> / </span>
          <Link href='/register'>Register</Link>
        </>
      ) : (
        <>
          <ClickableIcon imgSrc={UserImage} altText='User' linkDest='/user' />
          <ClickableIcon imgSrc={CartImage} altText='Cart' linkDest='/cart' />
        </>
      )}
    </div>
  );
};

export default IconsContainer;
