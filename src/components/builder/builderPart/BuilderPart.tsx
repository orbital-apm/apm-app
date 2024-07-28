import Image from 'next/image';

import styles from './BuilderPart.module.scss';
import BuilderArrow from '@/assets/images/icons/builder-arrow.svg';
import { Keycaps, Kit, Switches } from '@/slices/builderSlice';
import Link from 'next/link';

const BuilderPart = ({ part, linkText, linkDest }: BuilderPartParams) => {
  console.log(part);
  return (
    <div className={styles.builderPartContainer}>
      <Image src={BuilderArrow} alt='Builder arrow' />

      {!part ? (
        <Link href={linkDest} className={styles.builderPartSelectButton}>
          <span>select {linkText}</span>
        </Link>
      ) : (
        <Link href={linkDest} className={styles.builderPartSelectedLink}>
          <span>{part.name}</span>

          <Image src={part.imageUrl} alt={part.name} height={200} width={200} />

          <span>${part.price.toFixed(2)}</span>
        </Link>
      )}
    </div>
  );
};

interface BuilderPartParams {
  part: Keycaps | Switches | Kit | null;
  linkText: string;
  linkDest: string;
}

export default BuilderPart;
