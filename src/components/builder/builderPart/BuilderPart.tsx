import Image from 'next/image';

import styles from './BuilderPart.module.scss';
import BuilderArrow from '@/assets/images/icons/builder-arrow.svg';
import Example from '@/assets/images/builder/example.png';

const BuilderPart = () => {
  return (
    <div className={styles.builderPartContainer}>
      <Image src={BuilderArrow} alt='Builder arrow' />

      <span>Text</span>

      <Image src={Example} alt='Example' />

      <span>$123</span>
    </div>
  );
};

export default BuilderPart;
