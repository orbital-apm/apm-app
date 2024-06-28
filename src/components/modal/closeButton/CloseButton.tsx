'use client';

import { useRouter } from 'next/navigation';

import styles from './CloseButton.module.scss';

const CloseButton = () => {
  const router = useRouter();

  return (
    <button
      className={styles.closeButton}
      onClick={() => {
        router.back();
      }}
    >
      x
    </button>
  );
};

export default CloseButton;
