'use client';
import React from 'react';
import Image from 'next/image';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from 'next/link';


const Book:React.FC = () => {
  return (
    <div className='bg-gray-100 flex flex-col mb-16 md:mb-20 rounded-lg lg:mx-28 lg:my-24
    md:flex-row-reverse rounded-lg max-w-7xl lg:mx-auto'>
        <Image
          src='/agritech-robot-farming.jpg'
          alt='interface displaying Plant science data and metrics like CO2 and H2O, illustrating advanced agri-tech and automated precision farming'
          height={500}
          width={400}
          className='h-auto max-h-full w-full lg:w-2/5 object-contain fetchpriority-high loading-lazy'/>
        <div className=' inline-flex flex-col px-4 mb-16 mt-10
        md:ml-4 items-center justify-center lg:w-3/5 lg:max-w-[400px] lg:mx-auto'>
            <h2 className='text-center font-medium text-xl md:text-xl'>We're not just building software — we're building the future of farming.</h2>
            <p className='text-xs font-light text-center mt-2 '>Ready to take your farm digital?</p>
            <div className='inline-flex flex-col text-center space-y-4 items-center justify-center mt-6 mx-auto'>
               <Link href="mailto:famtechnologia@gmail.com" >
                <button  className='bg-black text-xs text-white justify-center
                text-center px-2 py-2 rounded-xl hover:bg-white hover:text-black
                  font-light inline-flex items-center w-42' aria-label='demo buttton'><MdKeyboardDoubleArrowRight size={24} className='text-black
                  bg-green-500 text-center items-center mr-1 rounded-lg'/>Book a free demo</button>
                  </Link>
               <Link href="https://wa.me/2349127483717">
                <button  className='bg-white text-xs text-black-500 justify-center border border-black-500
                text-center mx-auto px-2 py-2 w-42 md:w-40 lg:w-44 rounded-lg hover:bg-black hover:text-white
                  font-light inline-flex items-center' aria-label='talk to our team button'>Talk to our team</button>
                  </Link>
            </div>
        </div>
    </div>
  )
}

export default Book;