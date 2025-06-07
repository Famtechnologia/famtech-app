'use client';
import React from 'react'

const FirstSection:React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between
    px-4 md:px-6 lg:mx-24 lg:my-24 md:my-15 max-w-5xl lg:mx-28 xl:mx-auto
     space-y-2 justify-center items-center mt-6 py-4 my-10 md:mx-auto'>
    <div className='flex flex-row md:flex-col space-x-5 md:space-y-5 lg:space-y-12  md:w-1/3  justify-between items-center text-center'>
       <div className='flex flex-col space-y-0.2 md:mx-auto items-center justify-center text-center '>
        <h2 className='tracking-wide text-lg md:text-2xl lg:text-2xl font-semibold text-center'>30+</h2>
        <p className='text-[9px] md:text-xs lg:text-sm font-light'>Professional Teams</p>
       </div>
       <div className='flex flex-col space-y-0.2 md:mx-auto items-center justify-center text-center'>
        <h2 className='tracking-wide text-lg md:text-2xl lg:text-2xl font-semibold text-center'>177+</h2>
        <p className='text-[9px] md:text-xs lg:text-sm font-light'>Active Users</p>
       </div>
       <div className='flex flex-col space-y-0.2 md:mx-auto items-center justify-center text-center'>
        <h2 className='tracking-wide text-lg md:text-2xl lg:text-2xl font-semibold text-center'>2K+</h2>
        <p className='text-[9px] md:text-xs lg:text-sm font-light'>Managing Acres of Land</p>
       </div>
    </div>

    <div className='flex justify-center mx-auto items-center md:w-2/3 
    md:max-w-[600px] lg:max-w-[1000px] lg:text-2xl md:text-lg'>
        <p className='text-center px-6 lg:px-0 text-gray-400 mt-4'>At <em className='text-black font-medium'>Famtech,</em> we empower farmers, agribusinesses, and governments with intelligent 
            tools to transform agricultural productivity, profitability, and sustainability.</p>
    </div>
    
    </div>
  )
}

export default FirstSection