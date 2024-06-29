import Image from 'next/image';

import styles from './Guides.module.scss';
import ArrowDown from '@/assets/images/icons/arrow-down.svg';
import GuidesCard from '@/components/guides/guidesCard/GuidesCard';
import { guidesData, GuidesItem } from '@/data/guidesData';

const Guides = () => {
  return (
    <main>
      <div className={styles.guidesContainer}>
        <h2 className={styles.guidesTitle}>start your journey here.</h2>

        <Image src={ArrowDown} alt='Arrow down' className={styles.clickableIconImage} />

        <div className={styles.cardsContainter}>
          {guidesData.map((guidesItem: GuidesItem) => (
            <GuidesCard
              key={guidesItem.text}
              linkDest={guidesItem.linkDest}
              text={guidesItem.text}
              imgSrc={guidesItem.imgSrc}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Guides;
