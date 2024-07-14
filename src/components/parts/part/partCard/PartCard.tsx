import Image from 'next/image';

import styles from './PartCard.module.scss';
import Example from '@/assets/images/builder/example.png';
import Button from '@/components/ui/form/button/Button';

const PartCard = () => {
  return (
    <div className={styles.partCardContainer}>
      <Image src={Example} alt='Example' className={styles.partCardImg} />

      <div className={styles.partCardContent}>
        <span>Name</span>

        <div className={styles.partCardDetailsContainer}>
          <div className={styles.partCardDetail}>
            <span>Price</span>
          </div>

          <div className={styles.partCardDetail}>
            <span>Type</span>
          </div>
        </div>

        <Button type='button' text='select' />
      </div>
    </div>
  );
};

export default PartCard;
