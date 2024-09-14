import { Link } from 'react-router-dom';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './FavBook.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import book6 from '../assets/banner-books/book6.jpg'
import book7 from '../assets/banner-books/book7.jpg'
import book8 from '../assets/banner-books/book8.jpg'
import book9 from '../assets/banner-books/book9.jpg'
import book10 from '../assets/banner-books/book10.jpg'
import book11 from '../assets/banner-books/book11.jpg'
import book12 from '../assets/banner-books/book12.jpg'
import book13 from '../assets/banner-books/book13.jpg'
import book14 from '../assets/banner-books/book14.jpg'
import book15 from '../assets/banner-books/book15.jpg'


const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='favbook px-32'>
            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={book6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={book7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={book8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={book9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={book10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={book11} alt="" /></SwiperSlide>
        <SwiperSlide><img src={book12} alt="" /></SwiperSlide>
        <SwiperSlide><img src={book13} alt="" /></SwiperSlide>
        <SwiperSlide><img src={book14} alt="" /></SwiperSlide>
        <SwiperSlide><img src={book15} alt="" /></SwiperSlide>
      </Swiper>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug text-yellow-400'>Find Your Favorite <span className='text-fuchsia-800'>Book Here</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias repellendus quo fuga explicabo laborum quae soluta nisi voluptas. Consequuntur error itaque libero architecto officia quam odio, ratione odit aspernatur quis mollitia dolor laboriosam, nam asperiores nemo optio omnis nulla.</p>
            
            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads </p>
                </div>
            </div>

            <Link to="/shop" className="mt-12 block"><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook