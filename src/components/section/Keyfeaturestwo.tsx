'use client';
import React from 'react'
import { MdTask } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { GoCloudOffline } from "react-icons/go";
import { TbVectorTriangle } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import Image from 'next/image';


const KeyFeatures = () => {
  return (
    <div className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden lg:max-w-[350px]  p-4 pt-2">
        <div>
    <Image
    src='/images/home/ten-million.png'
    alt='ten million image'
    height={359}
    width={358}
    className="h-auto w-48 md:w-48 items-center mx-auto pt-10 object-cover loading-lazy" 
    />
        </div>
        <div className='absolute inset-0 flex flex-col  justify-center space-y-4
         px-0 lg:px-2 pt-4 pb-2 z-10'>
        <div >
           <p className='inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800
            text-[9px] font-medium shadow-md rounded-xl whitespace-nowrap border border-gray-200 space-x-2 '>
           <MdTask size={10} className='text-green-600 mx-1' /> Financial reporting & budgeting
           </p>
        </div>
        <div className="inve">
            <p className='inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800
            text-[9px] font-medium shadow-md rounded-xl whitespace-nowrap border border-gray-200 space-x-2 float-right mr-0'>
           <TbVectorTriangle size={10} className='text-green-600 mx-1 float-right' /> Inventory control</p>
        </div>
        <div className="task">
            <p className='inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800
            text-[9px] font-medium shadow-md rounded-xl whitespace-nowrap border border-gray-200 space-x-2'>
                <GrTask size={10} className='text-green-600 mx-1'/> Task & field management</p>
        </div>
        <div className="offline">
            <p className='inline-flex float-right mr-0 items-center px-4 py-2 bg-gray-100 text-gray-800
            text-[9px] font-medium shadow-md rounded-xl whitespace-nowrap border border-gray-200 space-x-2' >
                <GoCloudOffline size={10} className='text-green-600 mx-1'/> Offline mode and mobile devices</p>
        </div>
        <div className="real">
            <p className='inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800
            text-[9px] font-medium shadow-md rounded-xl whitespace-nowrap border border-gray-200 space-x-2'>
                <IoAnalytics size={10} className='text-green-600 mx-1' /> Real-time performance insights</p>
        </div>
        </div>
    </div>
  )
}

export default KeyFeatures















