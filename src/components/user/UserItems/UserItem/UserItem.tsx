import styles from './UserItem.module.scss';
import Link from 'next/link';

const UserItem = ({ name, linkDest }: UserItemProps) => {
  return (
    <Link href={linkDest}>
      <span>{name}</span>
    </Link>
  );
};

interface UserItemProps {
  name: string;
  linkDest: string;
}

export default UserItem;
