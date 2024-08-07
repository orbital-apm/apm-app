import AboutMainImg from '@/assets/images/guides/sizes/sizes-1.png';
import { StaticImageData } from 'next/image';

export interface AboutContentParams {
  title: string;
  imgSrc: StaticImageData;
  text: string;
}

export const aboutUsContent: AboutContentParams = {
  title: 'about us.',
  imgSrc: AboutMainImg,
  text: `
    Hello everyone! This is Actions Per Minute, a self-directed project created for Orbital 2024. <br><br>
    At Actions Per Minute, we're passionate about all things mechanical keyboards. We believe in the perfect blend of form and function, bringing you guides, custom builds, and a marketplace for keyboard aficionados. <br><br>
    This web app is dedicated to helping you find the ideal keyboard setup that'll make your fingers dance across the keys. Whether you're a typing speed demon, a coding wizard, or just someone who appreciates the satisfying clack of a well-built keyboard, we're here to support your journey in the wonderful world of mechanical keyboards.
    `
};
