import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full bg-sky-800/30 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1 className='say'>PEAKSTAYS</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
                <FaInstagram className='icon'/>
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>About</li>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>Partnership</li>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>Career</li>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>Newsroom</li>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>Advertising</li>
                </ul>
                <ul className='text-right lg:flex'>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>Home</li>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>Destination</li>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>Travel</li>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>View</li>
                    <li className='hover:scale-105 duration-200 cursor-pointer'>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer