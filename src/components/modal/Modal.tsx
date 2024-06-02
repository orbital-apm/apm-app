import React from 'react';

import styles from './Modal.module.scss';

const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        {children}
      </div>
    </div>);
};

interface ModalProps {
  children: React.ReactNode;
}

export default Modal;
