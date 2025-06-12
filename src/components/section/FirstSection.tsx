'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FirstSection:React.FC = () => {

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.15
      },
    },
  };



  const itemFadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  
  const textFadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: 0.3, 
      },
    },
  };


  return (
    <motion.div
      className='flex flex-col md:flex-row md:justify-between
      px-4 md:px-6 lg:mx-24 lg:my-14 md:my-12 max-w-5xl lg:mx-28 xl:mx-auto
      space-y-2 justify-center items-center mt-3 py-4 my-10 md:mx-auto'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={fadeUpVariants} 
    >
      <motion.div
        className='flex  flex-row md:flex-col space-x-3 md:space-y-0 lg:space-y-0 md:w-1/3 justify-between items-center text-center'
      >
        <motion.div className='flex flex-col   md:mx-auto items-center justify-center text-center' variants={itemFadeUpVariants}>
          <h2 className='tracking-wide text-xl md:text-2xl lg:text-2xl font-semibold text-center'>30+</h2>
          <p className='text-[10px] md:text-xs lg:text-sm'>Professional Teams</p>
        </motion.div>
        <motion.div className='flex flex-col   md:mx-auto items-center justify-center text-center' variants={itemFadeUpVariants}>
          <h2 className='tracking-wide text-xl md:text-2xl lg:text-2xl font-semibold text-center'>177+</h2>
          <p className='text-[10px] md:text-xs lg:text-sm '>Active Users</p>
        </motion.div>
        <motion.div className='flex flex-col md:mx-auto items-center justify-center text-center' variants={itemFadeUpVariants}>
          <h2 className='tracking-wide text-xl md:text-2xl lg:text-2xl font-semibold text-center'>2K+</h2>
          <p className='text-[10px] md:text-xs lg:text-sm'>Managing Acres of Land</p>
        </motion.div>
      </motion.div>

      <motion.div
        className='flex justify-center mx-auto items-center md:w-2/3
        md:max-w-[600px] lg:max-w-[1000px] lg:text-2xl md:text-lg'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={textFadeUpVariants} 
      >
        <p className='text-center text-base lg:text-xl px-6 lg:px-0 text-gray-400 mt-4'>At <em className='text-black font-medium'>Famtech,</em> we empower farmers, agribusinesses, and governments with intelligent tools to transform agricultural productivity, profitability, and sustainability.</p>
      </motion.div>
    </motion.div>
  );
}

export default FirstSection;