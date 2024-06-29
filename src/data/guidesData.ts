import { StaticImageData } from 'next/image';

import IntroImg from '@/assets/images/guideCards/intro.png';
import KeycapsAndSwitchesImg from '@/assets/images/guideCards/keycaps-and-switches.png';
import SizesImg from '@/assets/images/guideCards/sizes.png';

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
    linkDest: '/guides/keycaps-and-switches',
    text: 'a guide to keycaps and switches.',
    imgSrc: KeycapsAndSwitchesImg,
  },
  {
    linkDest: '/guides/sizes',
    text: 'a guide to keyboard sizes.',
    imgSrc: SizesImg,
  },
];
