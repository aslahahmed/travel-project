import React, {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const sliderData = [   
    {
        url: 'https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        url:'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
    } ,
    {
        url:'https://images.unsplash.com/photo-1607836046730-3317bd58a31b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }  
]
    

const Carousel = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-4 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] left-8 md:left-[16%] text-3xl text-white cursor-pointer'/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] right-8 md:right-[16%] text-3xl text-white cursor-pointer'/>

        {sliderData.map((item, index) => (
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (<img className='w-full rounded-md' src={item.url} alt='/'/>)}
            </div>
        ))}
    </div>
  )
}

export default Carousel