import Image from 'next/image';

import { GuidesContentParams } from '@/data/guidesContentData';
import styles from './Guide.module.scss';
import ArrowDown from '@/assets/images/icons/arrow-down.svg';

const Guide = ({ guidesContent }: GuideParams) => {
  return (
    <div className={styles.guideContainer}>
      <h2 className='title'>{guidesContent.title}</h2>

      <Image src={ArrowDown} alt='Arrow down' className={styles.clickableIconImage} />

      <Image src={guidesContent.imgSrc} alt='sub-image' />

      <p className={styles.guideText} dangerouslySetInnerHTML={createMarkup(guidesContent.text)} />
    </div>
  );
};

function createMarkup(htmlString: string): { __html: string } {
  return { __html: htmlString };
}

interface GuideParams {
  guidesContent: GuidesContentParams;
}

export default Guide;
