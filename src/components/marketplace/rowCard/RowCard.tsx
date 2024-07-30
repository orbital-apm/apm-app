import Link from 'next/link';
import Image from 'next/image';

import styles from './RowCard.module.scss';
import Example from '@/assets/images/builder/example.png';

// Todo: Refactor into common component with UserItem
const RowCard = ({ name, description, linkDest, price }: UserItemProps) => {
  return (
    <Link href={linkDest} className={styles.itemLinkContainer}>
      <div className={styles.itemContainer}>
        <Image src={Example} alt={name} className={styles.itemImage} />

        <div className={styles.itemContent}>
          <h3 className={styles.itemTitle}>{name}</h3>

          <p className={styles.itemDescription}>{description}</p>

          <p className={styles.itemPrice}>${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

interface UserItemProps {
  name: string;
  description: string;
  // imageLink: string;
  linkDest: string;
  price: number;
}

export default RowCard;
