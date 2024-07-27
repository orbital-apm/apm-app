import styles from './UserItems.module.scss';
import UserItem from '@/components/user/UserItems/UserItem/UserItem';

const UserItems = ({ title, items }: UserItemsProps) => {
  return (
    <div className={styles.userItemsContainer}>
      <h2>{title}</h2>

      <div className={styles.itemsContainer}>
        {items.map(item => (
          <UserItem key='hi' name='hi' description='hello' imageLink='' linkDest='/' price={2} />
        ))}
      </div>
    </div>
  );
};

interface UserItemsProps {
  title: string;
  items: string[];
}

export default UserItems;
