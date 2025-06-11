'use client';
import React from 'react';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Dashboard:React.FC = () => {

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      },
    },
  };

  return (
    <motion.div
      className='max-w-7xl xl:mx-auto lg:px-28 mx-4 my-10 md:my-15 md:mx-12 md:space-y-6 lg:my:24 flex flex-col space-y-4'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={textVariants}>
        <SectionTitle title='Dashboard'/>
      </motion.div>
      
      <div className='md:flex flex-col-reverse'>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image 
            src='/dashboard-preview.png'
            alt='famtech dashboard preview'
            width={1000}
            height={500}
            className="h-auto max-h-full w-full lg:max-w-[800px] mx-auto object-contain loading-lazy" 
          />
        </motion.div>

        <div className='flex flex-col md:flex-row mx-auto md:mx-0
          items-center justify-center md:mb-4 space-y-4 lg:mx-8 lg:mt-4
          md:justify-between'>
          <motion.h2
            className='text-center text-xs md:text-left
            md:text-base md:max-w-[500px] lg:max-w-[600px]'
            variants={textVariants}
          >
            Digitize your daily operations with a platform designed to manage crops, livestock, teams, finances, and records—all in one place.
          </motion.h2>
          <motion.a 
            href="https://wa.me/2349127483717" 
            className='text-xs mx-auto lg:mx-0 justify-center items-center inline-flex border-t 
            border-b border-green-600 p-2 hover:text-green-500'
            variants={textVariants}
          >
            Get Started <FaAngleRight size={16} className='ml-2 '/>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;