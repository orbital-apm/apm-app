import { StaticImageData } from 'next/image';

import IntroImg from '@/assets/images/guides/guideCards/intro.png';
import KeycapsAndSwitchesImg from '@/assets/images/guides/guideCards/keycaps-and-switches.png';
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
    linkDest: '/guides/keycaps_and_switches',
    text: 'a guide to keycaps and switches.',
    imgSrc: KeycapsAndSwitchesImg,
  },
  {
    linkDest: '/guides/sizes',
    text: 'a guide to keyboard sizes.',
    imgSrc: SizesImg,
  },
];
