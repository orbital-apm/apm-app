import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './GuidesCard.module.scss';
import ArrowRight from '@/assets/images/icons/arrow-right.svg';

const GuidesCard = ({ linkDest, text, imgSrc }: GuidesCardProps) => {
  return (
    <Link href={linkDest}>
      <div className={styles.guidesCardContainer}>
        <h3 className={styles.guidesCardText}>{text}</h3>
        <Image src={ArrowRight} alt='Arrow right' />
        <Image src={imgSrc} alt={text} />
      </div>
    </Link>
  );
};

interface GuidesCardProps {
  linkDest: string;
  text: string;
  imgSrc: StaticImageData;
}

export default GuidesCard;
