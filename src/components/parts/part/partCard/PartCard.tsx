import Image from 'next/image';

import styles from './PartCard.module.scss';
import Button from '@/components/ui/form/button/Button';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { PartType, setPart } from '@/slices/builderSlice';
import { PartModel } from '@/components/parts/part/Part';
import { useRouter } from 'next/navigation';

const PartCard = ({ type, part }: PartCardProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onClickFn = () => {
    dispatch(
      setPart({
        type: type,
        data: {
          id: part.id,
          name: part.name,
          price: part.price,
          imageUrl: part.imageUrl.split(' ').at(-2) || part.imageUrl.split(' ')[0]
        }
      })
    );
    router.push('/builder');
  };

  return (
    <div className={styles.partCardContainer}>
      <Image
        src={part.imageUrl.split(' ').at(-2) || part.imageUrl.split(' ')[0]}
        alt={part.name}
        className={styles.partCardImg}
        width={256}
        height={256}
      />

      <div className={styles.partCardContent}>
        <span>{part.name}</span>

        <div className={styles.partCardDetailsContainer}>
          <div className={styles.partCardDetail}>
            <span>${part.price.toFixed(2)}</span>
          </div>

          {/*<div className={styles.partCardDetail}>*/}
          {/*  <span>{primaryDetail}</span>*/}
          {/*</div>*/}
        </div>

        <Button type='button' text='select' onClickFn={onClickFn} />
      </div>
    </div>
  );
};

interface PartCardProps {
  type: PartType;
  part: PartModel;
}

export default PartCard;
