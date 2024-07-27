'use client';

import Image from 'next/image';

import styles from './User.module.scss';
import UserImage from '@/assets/images/icons/user.svg';
import UserItems from '@/components/user/UserItems/UserItems';
import Button from '@/components/ui/form/button/Button';
import { useAppSelector } from '@/hooks/useAppSelector';
import { redirect } from 'next/navigation';

const User = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return redirect('/');
  }

  const fakeItem = {
    name: 'hello',
    description: 'hi hi hi',
    linkDest: '/',
    price: 2.123,
  };

  return (
    <div className={styles.userContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePictureBg}>
          <Image src={UserImage} alt='Profile picture' className={styles.profilePicture} />
        </div>

        <Button type='button' text='logout' />
      </div>

      <UserItems title='builds' items={[fakeItem, fakeItem]} />

      <UserItems title='listings' items={[fakeItem]} />
    </div>
  );
};

export default User;
