import Image from 'next/image';
import Link from 'next/link';

import styles from './BuilderPart.module.scss';
import CloseImage from '@/assets/images/icons/x.svg';
import BuilderArrow from '@/assets/images/icons/builder-arrow.svg';
import { Keycaps, Kit, Switches } from '@/slices/builderSlice';

const BuilderPart = ({ part, linkText, linkDest, removeHandler }: BuilderPartParams) => {
  return (
    <div className={styles.builderPartContainer}>
      <Image src={BuilderArrow} alt='Builder arrow' />

      {!part ? (
        <Link href={linkDest} className={styles.builderPartSelectButton}>
          <span>select {linkText}</span>
        </Link>
      ) : (
        <>
          <Link href={linkDest} className={styles.builderPartSelectedLink}>
            <span>{part.name}</span>

            <Image src={part.imageUrl} alt={part.name} height={160} width={160} />

            <span>${part.price.toFixed(2)}</span>
          </Link>

          <button className={styles.closeButton} onClick={removeHandler}>
            <Image src={CloseImage} alt='Close' />
          </button>
        </>
      )}
    </div>
  );
};

interface BuilderPartParams {
  part: Keycaps | Switches | Kit | null;
  linkText: string;
  linkDest: string;
  removeHandler: () => void;
}

export default BuilderPart;
