import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

import './BannerCard.css';

import book1 from '../assets/banner-books/book11.jpg'
import book2 from '../assets/banner-books/book12.jpg'
import book3 from '../assets/banner-books/book13.jpg'
import book4 from '../assets/banner-books/book8.jpg'
import book5 from '../assets/banner-books/book15.jpg'

const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          // shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={book1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book3} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={book4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book5} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard