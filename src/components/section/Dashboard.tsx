'use client';
import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
const Dashboard:React.FC = () => {
  return (
    <div className= 'max-w-7xl xl:mx-auto lg:px-28 mx-4 my-10 md:my-15 md:mx-12 md:space-y-6  lg:my:24 flex flex-col space-y-4'>
       <SectionTitle title='Dashboard'/>
       <div className='md:flex flex-col-reverse'>
        <Image 
    src='/dashboard-preview.png'
    alt='famtech dashboard preview'
    width={1000}
    height={500}
    className="h-auto max-h-full w-full lg:max-w-[800px] mx-auto object-contain" 
    />

    <div className='flex flex-col md:flex-row mx-auto md:mx-0
     items-center justify-center md:mb-4 space-y-4 lg:mx-8 lg:mt-4
     md:justify-between'>
        <h2 className='text-center text-xs md:text-left
         md:text-base md:max-w-[500px] lg:max-w-[600px]'>Digitize your daily operations with 
            a platform designed to manage crops, livestock, teams, finances, and records—all in one place.</h2>
        <a href="#" className='text-xs mx-auto lg:mx-0 justify-center items-center inline-flex border-t 
        border-b border-green-600 p-2'>Get Started <FaAngleRight size={16} 
        className='ml-2 '/></a>
     </div>
   </div>
    </div>
  )
}

export default Dashboard