import Image from 'next/image';

import styles from './ListingCard.module.scss';
import PlaceholderImage from '@/assets/images/guides/keycaps/keycaps-1.png';
import Link from 'next/link';

const conditionMapping: Record<number, string> = {
  5: 'brand new',
  4: 'like new',
  3: 'lightly used',
  2: 'well used',
  1: 'heavily used'
};

const ListingCard = ({ listing, linkDest }: ListingCardProps) => {
  return (
    <Link href={linkDest} className={styles.cardContainer}>
      <Image src={PlaceholderImage} alt={listing.title} className={styles.cardImage} />

      <div className={styles.cardTitle}>
        <span className={styles.cardTitleText}>{listing.title}</span>
      </div>

      <div className={styles.cardDetailsContainer}>
        <span className={styles.cardDetail}>${listing.price.toFixed(2)}</span>
        <span className={styles.cardDetail}>{conditionMapping[listing.condition]}</span>
      </div>
    </Link>
  );
};

interface ListingCardProps {
  listing: Listing;
  linkDest: string;
}

interface Listing {
  id: string;
  title: string;
  description: string;
  condition: number;
  part_type: string[];
  price: number;
}

export default ListingCard;
