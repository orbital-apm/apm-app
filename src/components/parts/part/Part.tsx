import styles from './Part.module.scss';
import PartCard from '@/components/parts/part/partCard/PartCard';
import PartFilter from '@/components/parts/part/partFilter/PartFilter';

const Part = () => {
  return (
    <div className={styles.partContainer}>
      <div className={styles.partFilter}>
        <PartFilter />
      </div>

      <div className={styles.partCardsContainer}>
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
      </div>
    </div>
  );
}

export default Part;
