import styles from './UserItems.module.scss';
import UserItem from '@/components/user/UserItems/UserItem/UserItem';

const UserItems = ({ title, items }: UserItemsProps) => {
  return (
    <div>
      <h2>{title}</h2>

      {items.map(item => (
        <UserItem key='hi' name='hi' linkDest='/' />
      ))}
    </div>
  );
};

interface UserItemsProps {
  title: string;
  items: string[];
}

export default UserItems;
