'use client';

import Image from 'next/image';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';

import styles from './User.module.scss';
import UserImage from '@/assets/images/icons/user.svg';
import UserItems from '@/components/user/UserItems/UserItems';
import Button from '@/components/ui/form/button/Button';
import { useAppSelector } from '@/hooks/useAppSelector';
import { redirect } from 'next/navigation';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setIsAuthenticated } from '@/slices/authSlice';

function getCurrentUserId(): string | null {
  const token = Cookies.get('authToken');
  if (!token) return null;

  try {
    return jwtDecode<JwtPayload>(token).sub;
  } catch (error) {
    console.error('Failed to decode JWT', error);
    return null;
  }
}

const User = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    Cookies.remove('authToken');
    dispatch(setIsAuthenticated(false));
  };

  const { data } = useQuery<ListingsResponse>({
    queryKey: ['listings'],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}/v1/listings?user_id=${getCurrentUserId()}`
      );
      return response.data;
    }
  });

  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return redirect('/');
  }

  return (
    <div className={styles.userContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePictureBg}>
          <Image src={UserImage} alt='Profile picture' className={styles.profilePicture} />
        </div>

        <Button type='button' text='logout' onClickFn={handleLogout} />
      </div>

      <UserItems
        title='my listings'
        items={
          data?.items.map(listing => ({
            id: listing.id,
            name: listing.title,
            description: listing.description,
            price: listing.price,
            linkDest: '/'
          })) || []
        }
      />
    </div>
  );
};

interface JwtPayload {
  sub: string;
}

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

export default User;
