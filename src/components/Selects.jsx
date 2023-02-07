import React from 'react'
import himalayan from '../assets/himalayan.jpg'
import khyber from '../assets/khyber.jpg'
import paradise from '../assets/paradise.jpg'
import wildflower from '../assets/wildflower.jpg'
import rokeby from '../assets/rokeby.jpg'
import vivaan from '../assets/vivaan.jpg'
import SelectsCard from './SelectsCard'


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCard bg={paradise} text='Paradise'/>
        <SelectsCard bg={himalayan} text='The Himalayan'/>
        <SelectsCard bg={rokeby} text='Rokeby Manor'/>
        <SelectsCard bg={wildflower} text='Wildflower'/>
        <SelectsCard bg={vivaan} text='Vivaan'/>
        <SelectsCard bg={khyber} text='Khyber'/>
    </div>
  )
}

export default Selects