'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Carousel.module.scss';
import Slide1 from '@/assets/images/carousel/1.jpg';
import Slide2 from '@/assets/images/carousel/2.jpg';
import Slide3 from '@/assets/images/carousel/3.jpg';
import Slide4 from '@/assets/images/carousel/4.jpg';

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={32}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      loop={true}
      speed={1000}
      pagination={{
        clickable: true,
        bulletActiveClass: styles.paginationActive
      }}
      modules={[Autoplay, Pagination]}
      className={styles.carouselContainer}
    >
      <SwiperSlide>
        <div className={styles.slideContainer}>
          <Image src={Slide1} alt='slide' className={styles.slideImage} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slideContainer}>
          <Image src={Slide2} alt='slide' className={styles.slideImage} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slideContainer}>
          <Image src={Slide3} alt='slide' className={styles.slideImage} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slideContainer}>
          <Image src={Slide4} alt='slide' className={styles.slideImage} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
