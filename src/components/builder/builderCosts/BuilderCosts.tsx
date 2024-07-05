import styles from './BuilderCosts.module.scss';
import { Keycaps, Kit, Switches } from '@/slices/builderSlice';

const BuilderCosts = ({ parts }: BuilderCostsProps) => {
  const subTotal = Object.values(parts).reduce((sum, part) => sum + (part ? part.price : 0), 0);

  return (
    <div className={styles.builderCostsContainer}>
      <span className={styles.builderCostsSubtotalText}>subtotal</span>
      <span className={styles.builderCostsSubtotalAmount}>${subTotal.toFixed(2)}</span>

      <span className={styles.builderCostsShippingText}>shipping</span>
      <span className={styles.builderCostsShippingAmount}>-</span>

      <span className={styles.builderCostsTotalText}>total</span>
      <span className={styles.builderCostsTotalAmount}>${subTotal.toFixed(2)}</span>
    </div>
  );
};

interface BuilderCostsProps {
  parts: {
    keycaps: Keycaps | null;
    switches: Switches | null;
    kit: Kit | null;
  };
}

export default BuilderCosts;
