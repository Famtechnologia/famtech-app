'use client';
import React from 'react';
import Options from './Options';
import { BsArrowRightShort } from "react-icons/bs";
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';


const FourthSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className='mx-4 py-4 md:py-16 space-y-4 md:mx-12 lg:mx-28 lg:justify-center
      md:gap-4 md:grid-cols-[auto_320px] lg:grid-cols-[minmax(0,_500px)_minmax(0,_450px)]
      md:grid-rows-[200px_280px_80px] lg:gap-8 max-w-5xl xl:mx-auto sm:mx-4
      md:grid my:10 '
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >

      <motion.div
        className='md:col-start-2 md:row-start-1 md:row-span-2 md:h-full'
        variants={itemVariants}
      >
        <Options/>
      </motion.div>

      <motion.p
        className='hidden md:inline-flex flex-row md:col-start-2 md:row-start-3 lg:ml-0 text-sm '
        variants={itemVariants}
      >
        <GoArrowUpRight size={36} className='text-green-500 mr-1 font-bold'/> Famtech is helping farmers and agribusinesses across
        Nigeria and beyond increase yields, cut costs, and unlock new levels of profitability.
      </motion.p>
      
      <motion.div
        className='bg-green-600 p-4 md:py-6 md:h-full text-white space-y-4 rounded-xl md:col-start-1 md:row-start-1'
        variants={itemVariants}
      >
        <p className='text-xs font-light text-left '>Facts & Numbers</p>
        <h2 className='font-medium text-5xl md:text-6xl mt-9 h-14 '>90%</h2>
        <p className='font-small text-left text-base lg:text-sm mt-3 '>Of customers recommend Famtech service </p>
      </motion.div>

      <motion.div
        className='bg-green-800 max-w-[320px] md:max-w-full mx-auto md:ml-0 space-y-5 lg:space-y-8
          col-start-1 row-start-2 row-span-2 rounded-xl text-white p-5 py-8 iems-center justify-center
        lg:p-8 lg:px-12 lg:pt-8 '
        variants={itemVariants}
      >
        <div className='flex flex-row justify-between font-light items-center'>
          <p className='text-xs lg:text-sm text-left'>Blogs</p>
          <a href="#" className='text-xs lg:text-sm flex items-center justify-center'>Read <BsArrowRightShort size={24} className='ml-1 text-bold'/></a>
        </div>
        <p className='text-base text-left'>How to control the cost of curing rice pest today farm...</p>
        <Image
          src='/images/home/fresh-vegetable-market.png'
          alt='ripe vegetables including red tomatoes, yellow bell peppers, and green leafy lettuce'
          height={100}
          width={300}
          className='h-auto w-full fetchpriority-high object-contain rounded-xl border border-green-400 loading-lazy'
        />
      </motion.div>
    </motion.div>
  );
};

export default FourthSection;