'use client';

import Image from 'next/image';

import styles from './Builder.module.scss';
import ArrowDown from '@/assets/images/icons/arrow-down.svg';
import KeyboardLayers from '@/assets/images/builder/keyboard-layers.png';
import BuilderPart from '@/components/builder/builderPart/BuilderPart';
import BuilderCosts from '@/components/builder/builderCosts/BuilderCosts';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Keycaps, Kit, Switches } from '@/slices/builderSlice';
import { unsetKeycaps, unsetSwitches, unsetKit } from '@/slices/builderSlice';

const Builder = () => {
  const dispatch = useAppDispatch();

  const keycaps: Keycaps | null = useAppSelector(state => state.builder.keycaps);
  const switches: Switches | null = useAppSelector(state => state.builder.switches);
  const kit: Kit | null = useAppSelector(state => state.builder.kit);

  const parts = {
    keycaps: keycaps,
    switches: switches,
    kit: kit
  };

  return (
    <div className={styles.builderContainer}>
      <h2 className='title'>builder.</h2>

      <Image src={ArrowDown} alt='Arrow down' />
      <div className={styles.compatibilityChecker}>
        <p>Your products are compatible!</p>
      </div>

      <div className={styles.builderGridContainer}>
        <Image src={KeyboardLayers} alt='Keyboard layers' className={styles.builderImg} />

        <div className={styles.builderKeycaps}>
          <BuilderPart
            part={keycaps}
            linkText='keycaps'
            linkDest='/parts/keycaps'
            removeHandler={() => dispatch(unsetKeycaps())}
          />
        </div>

        <div className={styles.builderSwitches}>
          <BuilderPart
            part={switches}
            linkText='switches'
            linkDest='/parts/switches'
            removeHandler={() => dispatch(unsetSwitches())}
          />
        </div>

        <div className={styles.builderKits}>
          <BuilderPart part={kit} linkText='kits' linkDest='/parts/kits' removeHandler={() => dispatch(unsetKit())} />
        </div>

        <div className={styles.builderCosts}>
          <BuilderCosts parts={parts} />
        </div>
      </div>
    </div>
  );
};

export default Builder;
