import styles from './Part.module.scss';
import PartCard from '@/components/parts/part/partCard/PartCard';
import PartFilter from '@/components/parts/part/partFilter/PartFilter';
import { PartConfig } from '@/data/partsConfig';

const Part = ({ partConfig }: PartParams) => {
  return (
    <div className={styles.partContainer}>
      <div className={styles.partFilter}>
        <PartFilter filterConfigs={partConfig.filters} />
      </div>

      <div className={styles.partCardsContainer}>
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
        <PartCard />
      </div>
    </div>
  );
};

interface PartParams {
  partConfig: PartConfig;
}

export default Part;
