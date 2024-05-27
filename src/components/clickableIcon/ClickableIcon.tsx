import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './ClickableIcon.module.scss';

const ClickableIcon = ({ imgSrc, altText, linkDest }: ClickableIconProps) => {
  return (
    <div className={styles.clickableIconContainer}>
      <Link href={linkDest}>
        <Image src={imgSrc} alt={altText} className={styles.clickableIconImage} />
      </Link>
    </div>
  );
};

interface ClickableIconProps {
  imgSrc: StaticImageData;
  altText: string;
  linkDest: string;
}

export default ClickableIcon;
