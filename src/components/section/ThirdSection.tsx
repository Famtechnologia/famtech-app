'use client';
import React from 'react'
import Choose from './Choose'
import { BsArrowRightShort } from "react-icons/bs";
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";



const ThirdSection = () => {
  return (
    <div className='mx-4 py-16 space-y-4 md:mx-12
       lg:mx-28 
       md:inline-flex md:flex-row-reverse md:space-x-1'>
        <div className='md:w-1/2 md:ml-8 lg:h-full'>
        <Choose/>
        <p className='hidden md:inline-flex flex-row  lg:ml-0 text-sm mt-8'> <GoArrowUpRight size={36} className='text-green-500 mr-1 text-bold'/> Famtech is helping farmers and agribusinesses across
             Nigeria and beyond increase yields, cut costs, and unlock new levels of profitability.</p>
        </div>
        <div className='md:w-1/2 space-y-4 max-w-[320px] lg:max-w-full mx-auto'>
        <div className='bg-green-600 p-4 text-white space-y-4 rounded-xl'>
            <p className='text-xs font-light text-left '>Facts & Numbers</p>
            <h2 className='font-medium text-6xl mt-9 h-14 '>90%</h2>
            <p className='font-small text-left text-base lg:text-sm mt-3 '>Of customers recommend Famtech service </p>
        </div>
        <div className='bg-green-800 max-w-[320px] lg:max-w-full mx-auto space-y-5 rounded-xl text-white p-5 py-8 '>
            <div className='flex flex-row justify-between font-light items-center'>
                <p className='text-xs text-left'>Blogs</p>
                <a href="#" className='text-xs flex items-center justify-center'>Read <BsArrowRightShort size={20} className='ml-1'/></a>
            </div>
            <p className='text-base  text-left'>How to control the cost of curing rice pest today farm...</p>
            <Image
            src='/fresh-vegetable-market.png'
            alt='ripe vegetables including red tomatoes, yellow bell peppers, and green leafy lettuce'
            height={100}
            width={300}
            className='h-auto w-full  object-contain rounded-xl border border-green-400'
            />
        </div>
      </div>
    </div>
  )
}

export default ThirdSection
