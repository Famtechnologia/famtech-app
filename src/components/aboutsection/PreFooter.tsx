'use client' 
import React from 'react' 
import { MdKeyboardDoubleArrowRight } from "react-icons/md"; 
import { motion } from 'framer-motion'; 

const PreFooter: React.FC = () => { 

  const textVariants = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: 'easeOut', 
      }, 
    }, 
  }; 

  const buttonVariants = { 
    hidden: { opacity: 0, scale: 0.8 }, 
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut', 
      }, 
    }, 
  }; 

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.1, 
      }, 
    }, 
  }; 

  return ( 
    <motion.div 
      className=" 
        relative 
        flex flex-col items-center justify-center 
        space-y-4 text-white 
        my-10 lg:my-30 
        bg-[url('/hero-section-image-spraying-tractor.jpg')] bg-cover bg-center loading-lazy 
        h-96 md:h-80 lg:h-96 
        px-6 py-10 
        md:mx-20 
        md:rounded-xl lg:py-16 
        lg:mx-28 fetchpriority-high 
      " 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: false, amount: 0.3 }} 
      variants={containerVariants} 
    > 
      <div className="absolute inset-0 bg-black opacity-50 h-full md:rounded-lg"></div> 

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4"> 
        <motion.h2 
          className='font-bold text-xl lg:text-2xl' 
          variants={textVariants} 
        > 
          Join the Future of Farming 
        </motion.h2> 
        <motion.p 
          className='font-light text-sm md:max-w-[500px] lg:max-w-[700px]' 
          variants={textVariants} 
        > 
          At Famtech, we believe in the power of technology to change lives. 
          Whether you’re a small-scale farmer looking to increase your yield or 
          a large agribusiness in need of custom-built farm management software, 
          Famtech is here to help you achieve more with less. 
        </motion.p> 

        <motion.div 
          className='flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 
          items-center justify-center mt-6 md:mt-4' 
          variants={containerVariants}  
        > 
          <motion.a href="mailto:famtechnologia@gmail.com" 
            className=' 
              bg-white text-xs text-black 
              flex items-center justify-center 
              px-4 py-2 rounded-xl 
              font-light w-auto md:w-48 lg:w-52 
              hover:bg-black transition-colors 
              hover:text-white 
            ' 
            variants={buttonVariants} 
          > 
            <MdKeyboardDoubleArrowRight size={24} className='text-black mr-1 rounded-lg p-2 bg-green-600' /> 
            Book a free demo 
          </motion.a> 
          <motion.a 
            href="https://wa.me/2349127483717" 
            className=' 
              bg-transparent text-xs text-white border border-white 
              flex items-center justify-center 
              px-4 py-2 w-auto md:w-48 lg:w-52 rounded-xl 
              font-light w-full 
              hover:bg-white hover:text-black transition-colors 
            ' 
            variants={buttonVariants} 
          > 
            Talk to our team 
          </motion.a> 
        </motion.div> 
      </div> 
    </motion.div> 
  ) 
 } 

 export default PreFooter