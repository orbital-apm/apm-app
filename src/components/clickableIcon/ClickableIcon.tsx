'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './ClickableIcon.module.scss';

const ClickableIcon = ({ imgSrc, altText, linkDest }: ClickableIconProps) => {
  return (
    <Link href={linkDest}>
      <Image src={imgSrc} alt={altText} className={styles.clickableIconImage} />
    </Link>
  );
};

interface ClickableIconProps {
  imgSrc: StaticImageData;
  altText: string;
  linkDest: string;
}

export default ClickableIcon;
