import styles from './UserItems.module.scss';
import UserItem from '@/components/user/UserItems/UserItem/UserItem';

const UserItems = ({ title, items }: UserItemsProps) => {
  return (
    <div className={styles.userItemsContainer}>
      <h2>{title}</h2>

      <div className={styles.itemsContainer}>
        {items.map(item => (
          <UserItem
            key={item.name}
            name={item.name}
            description={item.description}
            linkDest={item.linkDest}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

interface UserItemsProps {
  title: string;
  items: UserItemModel[];
}

export interface UserItemModel {
  id: string;
  name: string;
  description: string;
  linkDest: string;
  price: number;
}

export default UserItems;
