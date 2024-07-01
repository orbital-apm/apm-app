import React from 'react';

import styles from './Modal.module.scss';
import CloseButton from '@/components/ui/modal/closeButton/CloseButton';

const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.closeContainer}>
          <CloseButton />
        </div>

        {children}
      </div>
    </div>
  );
};

interface ModalProps {
  children: React.ReactNode;
}

export default Modal;
