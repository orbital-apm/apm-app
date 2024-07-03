import Image from 'next/image';

import styles from './Builder.module.scss';
import ArrowDown from '@/assets/images/icons/arrow-down.svg';
import KeyboardLayers from '@/assets/images/builder/keyboard-layers.png';
import BuilderPart from '@/components/builder/builderPart/BuilderPart';
import BuilderCosts from '@/components/builder/builderCosts/BuilderCosts';

const Builder = () => {
  return (
    <div className={styles.builderContainer}>
      <h2 className='title'>builder.</h2>

      <Image src={ArrowDown} alt='Arrow down' />

      <div className={styles.builderGridContainer}>
        <Image src={KeyboardLayers} alt='Keyboard layers' className={styles.builderImg} />

        <div className={styles.builderKeycaps}>
          <BuilderPart />
        </div>

        <div className={styles.builderSwitches}>
          <BuilderPart />
        </div>

        <div className={styles.builderKits}>
          <BuilderPart />
        </div>

        <div className={styles.builderCosts}>
          <BuilderCosts />
        </div>
      </div>
    </div>
  );
};

export default Builder;
