import Image, { StaticImageData } from 'next/image';

import styles from './About.module.scss';
import ArrowDown from '@/assets/images/icons/arrow-down.svg';

interface AboutContent {
  title: string;
  imgSrc: StaticImageData;
  text: string;
}

const About = ({ content }: { content: AboutContent }) => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className='title'>{content.title}</h2>

      <Image src={ArrowDown} alt='Arrow down' className={styles.clickableIconImage} />

      <Image src={content.imgSrc} alt='sub-image' />

      <p className={styles.aboutText} dangerouslySetInnerHTML={createMarkup(content.text)} />
    </div>
  );
};

function createMarkup(htmlString: string): { __html: string } {
  return { __html: htmlString };
}

export default About;
