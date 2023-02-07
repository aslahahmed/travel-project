import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'



const Navbar = () => {
    const [nav, setNAv] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNAv(!nav)
        setLogo(!logo)
    }

  return (
    <div className='flex w-full justify-between items-center px-4 h-20 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block hover:scale-105 duration-300 cursor-pointer'}><span className='say'>PEAK</span>STAYS</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='hover:scale-105 duration-200 cursor-pointer'>Home</li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>Destination</li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>Travel</li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>View</li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2 hover:scale-105 duration-200 cursor-pointer' size={20}/>
            <BsPerson className='hover:scale-105 duration-200 cursor-pointer' size={20}/>
        </div>

        {/* hamburger menu */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black hover:scale-105 duration-200 cursor-pointer' size={20}/> : <HiOutlineMenuAlt4 className='hover:scale-105 duration-200 cursor-pointer' size={20}/>}
        </div>

        {/* mobile dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col ' : 'absolute left-[-100%]'}>
            <ul>
            <h1 className='hover:scale-105 duration-200 cursor-pointer'><span className='say'>PEAK</span>STAYS</h1>
            <li className='border-b hover:scale-105 duration-200 cursor-pointer'>Home</li>
            <li className='border-b hover:scale-105 duration-200 cursor-pointer'>Destination</li>
            <li className='border-b hover:scale-105 duration-200 cursor-pointer'>Travel</li>
            <li className='border-b hover:scale-105 duration-200 cursor-pointer'>View</li>
            <li className='border-b hover:scale-105 duration-200 cursor-pointer'>Book</li>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
                <FaInstagram className='icon'/>
            </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar