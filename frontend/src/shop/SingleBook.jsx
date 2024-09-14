import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BannerCard from '../home/BannerCard'

const SingleBook = () => {
    const {_id, bookTitle, imageUrl, authorName, bookDescription, category} = useLoaderData();
  return (
    <div className='px-4 lg:px-24 bg-fuchsia-900 flex items-center h-screen'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 px-32'>
            
            {/* rigth side */}
            <div>
                <img src={imageUrl} alt="" className='h-96 rounded-lg' />
            </div>
            
            {/* left side */}
            <div className='md:w-9/12 h-full space-y-4  '>
                <h2 className='text-5xl font-bold leading-snug text-yellow-400'>{bookTitle}</h2> 
                <hr />
                <h2 className='text-white font-bold'>{authorName}</h2>
                <p className='md:w-4/5 text-white'>{bookDescription}</p>
                <p className='md:w-4/5 text-white'><span className='font-bold underline'>Category:</span> {category}</p>
                
            </div>
                

        </div>
    </div>

  )
}

export default SingleBook