import Image from 'next/image';

import styles from './User.module.scss';
import UserImage from '@/assets/images/icons/user.svg';
import UserItems from '@/components/user/UserItems/UserItems';
import Button from '@/components/ui/form/button/Button';

const User = () => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePictureBg}>
          <Image src={UserImage} alt='Profile picture' className={styles.profilePicture} />
        </div>

        <Button type='button' text='logout' />
      </div>

      <UserItems title='builds' items={['hello', 'hello']} />

      <UserItems title='listings' items={['hello']} />
    </div>
  );
};

export default User;
