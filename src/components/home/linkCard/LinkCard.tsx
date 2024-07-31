import Link from 'next/link';

import styles from './LinkCard.module.scss';
import Image, { StaticImageData } from 'next/image';

const LinkCard = ({ cardText, imgSrc, linkDest }: LinkCardProps) => {
  return (
    <Link href={linkDest}>
      <div className={styles.linkCardContainer}>
        <div className={styles.linkCardContent}>
          <h2 className={styles.linkCardText}>{cardText}</h2>
        </div>
        <Image src={imgSrc} alt={cardText} className={styles.linkCardImage} />
      </div>
    </Link>
  );
};

interface LinkCardProps {
  cardText: string;
  imgSrc: StaticImageData;
  linkDest: string;
}

export default LinkCard;
