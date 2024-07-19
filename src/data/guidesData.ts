import { StaticImageData } from 'next/image';

import IntroImg from '@/assets/images/guides/guideCards/intro.png';
import KeycapsImg from '@/assets/images/guides/guideCards/keycaps.png';
import SwitchesImg from '@/assets/images/guides/guideCards/switches.png'
import SizesImg from '@/assets/images/guides/guideCards/sizes.png';


export interface GuidesItem {
  linkDest: string;
  text: string;
  imgSrc: StaticImageData;
}

export const guidesData: GuidesItem[] = [
  {
    linkDest: '/guides/intro',
    text: 'intro to mechanical keyboards.',
    imgSrc: IntroImg,
  },
  {
    linkDest: '/guides/keycaps',
    text: 'a guide to keycaps.',
    imgSrc: KeycapsImg,
  },
  {
    linkDest: '/guides/switches',
    text: 'a guide to switches.',
    imgSrc: SwitchesImg,
  },
  {
    linkDest: '/guides/sizes',
    text: 'a guide to keyboard sizes.',
    imgSrc: SizesImg,
  },
];
