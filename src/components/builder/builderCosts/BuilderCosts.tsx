import styles from './BuilderCosts.module.scss';

const BuilderCosts = () => {
  return (
    <div className={styles.builderCostsContainer}>
      <span className={styles.builderCostsSubtotalText}>subtotal</span>
      <span className={styles.builderCostsSubtotalAmount}>$123</span>

      <span className={styles.builderCostsShippingText}>shipping</span>
      <span className={styles.builderCostsShippingAmount}>-</span>

      <span className={styles.builderCostsTotalText}>total</span>
      <span className={styles.builderCostsTotalAmount}>$123</span>
    </div>
  );
};

export default BuilderCosts;
