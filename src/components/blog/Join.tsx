'use client'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Join: React.FC = () => {
  return (
    <div
      className="
        relative
        flex flex-col items-center justify-center 
        space-y-4 text-white 
        my-10 lg:my-30
        bg-[url('/strawberry-field.jpg')] bg-cover bg-center 
        h-96 md:h-80 lg:h-96 
        px-6 py-10 
        md:mx-20  
        md:rounded-xl lg:py-16 
        lg:mx-28
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 h-full md:rounded-lg"></div>

      {/* Content Container - z-index ensures it's above the overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
        <h2 className='font-bold text-xl lg:text-2xl'>Stay Ahead</h2>
        <p className='font-light text-sm md:max-w-[500px] lg:max-w-[700px]'>
          subscribe now for the latest updates and insights.
        </p>

        
        <div className='flex flex-row lg:space-x-4 space-y-4 lg:space-y-0
                     items-center justify-center mt-6 md:mt-4'> 
                     <form className=''>
                        <input type="email" placeholder='Enter your email..' 
                        className='p-4  bg-white text-gray-100  rounded-lg'
                        />
                     </form>
         
          <a
            href="#"
            className='
              bg-white text-xs text-black 
              flex items-center justify-center 
              px-4 py-2 rounded-xl
              font-light w-auto md:w-48 lg:w-52 
              hover:bg-gray-100 transition-colors
            '
          >
            <MdKeyboardDoubleArrowRight size={24} className='text-black mr-1 rounded-lg p-2 bg-green-600' />
            
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Join