import Image from 'next/image';

import styles from './BuilderPart.module.scss';
import BuilderArrow from '@/assets/images/icons/builder-arrow.svg';
import Example from '@/assets/images/builder/example.png';
import { Keycaps, Kit, Switches } from '@/slices/builderSlice';
import Link from 'next/link';

const BuilderPart = ({ part, linkText, linkDest }: BuilderPartParams) => {
  return (
    <div className={styles.builderPartContainer}>
      <Image src={BuilderArrow} alt='Builder arrow' />

      {!part ? (
        <Link href={linkDest} className={styles.builderPartSelectButton}>
          <span>select {linkText}</span>
        </Link>
      ) : (
        <>
          {/*<span>{part.name}</span>*/}
          <span>KBDFans KBD75 v3.1 Barebones DIY Light Blue Mechanical Keyboard</span>

          <Image src={Example} alt='Example' />

          {/*<span>${part.price}</span>*/}
          <span>$123</span>
        </>
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