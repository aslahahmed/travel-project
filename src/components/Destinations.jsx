import React from 'react'
import himalayan from '../assets/himalayan.jpg'
import khyber from '../assets/khyber.jpg'
import paradise from '../assets/paradise.jpg'
import wildflower from '../assets/wildflower.jpg'
import rokeby from '../assets/rokeby.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the Best Alps of Manali</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={wildflower} alt='/'/>
            <img className='w-full h-full object-cover' src={khyber} alt='/'/>
            <img className='w-full h-full object-cover' src={rokeby} alt='/'/>
            <img className='w-full h-full object-cover' src={himalayan} alt='/'/>
            <img className='w-full h-full object-cover' src={paradise} alt='/'/>


        </div>
    </div>
  )
}

export default Destinations