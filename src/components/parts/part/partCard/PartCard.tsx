import Image from 'next/image';

import styles from './PartCard.module.scss';
import Example from '@/assets/images/builder/example.png';
import Button from '@/components/ui/form/button/Button';

const PartCard = ({ name, price  }: PartCardProps) => {
  return (
    <div className={styles.partCardContainer}>
      <Image src={Example} alt='Example' className={styles.partCardImg} />

      <div className={styles.partCardContent}>
        <span>{name}</span>

        <div className={styles.partCardDetailsContainer}>
          <div className={styles.partCardDetail}>
            <span>${price.toFixed(2)}</span>
          </div>

          {/*<div className={styles.partCardDetail}>*/}
          {/*  <span>{primaryDetail}</span>*/}
          {/*</div>*/}
        </div>

        <Button type='button' text='select' />
      </div>
    </div>
  );
};

interface PartCardProps {
  name: string;
  price: number;
  primaryDetail: string;
}

export default PartCard;
