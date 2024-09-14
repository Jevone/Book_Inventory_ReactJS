import React from 'react'
import BannerCard from '../home/BannerCard'
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-fuchsia-900 flex items-center h-screen'>
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
            
            <div className='md:w-1/2 h-full space-y-8'>
                <h2 className='text-5xl font-bold leading-snug text-yellow-400 '>Unlimited Worlds  <span className='text-white'>Discover New Adventures in Every Book!</span></h2>
                <p className='md:w-4/5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, non. Saepe, quo est. Velit recusandae omnis provident, labore soluta dolorum culpa? Fuga cupiditate velit unde explicabo error culpa! Ex cupiditate inventore.</p>
                
                <div className='flex'>
                    <input type="text" name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-lg outline-none' />
                    <Button className='bg-white text-black pointer-events-none rounded-none rounded-r-lg'>
                        <HiOutlineArrowRight className="h-6 w-6" />
                    </Button>
                </div>
            </div>
           
            <div className='md:w-1/2 px-32'>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner