'use client';
import React from 'react';
import SectionTitle from './SectionTitle';
import Keyfeaturestwo from './Keyfeaturestwo';
import ContentCardtwo from './ContentCardtwo';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Service = () => {
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

  const productBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      className='grid grid-col gap-4 mx-4 my-10 md:mx-12 lg:mx-28 lg:my-24 md:my-15 max-w-5xl xl:mx-auto lg:mx-28'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={textVariants}>
        <SectionTitle title='Our Product'/>
      </motion.div>
      <motion.h1
        className='text-lg lg:text-3xl lg:max-w-[600px] mx-auto text-center text-black-400'
        variants={textVariants}
      >
        <span className='text-green-400 mb-2'>Agriculture is changing.</span> We make sure you stay ahead of it.
      </motion.h1>
      
      <div className='space-y-6'>
        <motion.div
          className="flex flex-col rounded-xl p-8 space-y-2 bg-[url('/images/home/FamOS.jpg')]
          bg-cover mx-auto lg:px-12
          bg-center md:grid md:gap-8 lg:py-12
          h-auto md:h-auto md:grid-cols-[repeat(2,auto)]"
          variants={productBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className='md:order-2'>
            <Keyfeaturestwo/>
          </div>

          <div className='md:order-1 lg:my-auto'>
            <ContentCardtwo
              stepNumber={1}
              heading="FamOS — Farm Operating System"
              description="Digitize your daily operations with a platform designed to manage crops, livestock, teams, finances, and records—all in one place."
              buttonText="Get Started"
              buttonHref="https://wa.me/2349127483717"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col rounded-xl p-8 space-y-2 bg-[url('/images/home/FamOS.jpg')]
          bg-cover mx-auto lg:px-12 lg:py-12
          bg-center md:grid md:gap-8
          h-auto md:h-auto md:grid-cols-[repeat(2,auto)]"
          variants={productBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <Image
            src='/images/home/features.png'
            alt='features'
            height={518}
            width={454}
            className='h-auto max-h-full w-full fetchpriority-high md:w-74 object-contain max-w-[300px] lg:max-w-[450px] mx-auto md:col-start-1 lg:ml-3'
          />
          <div className='lg:my-auto md:col-start-2'>
            <ContentCardtwo
              stepNumber={2}
              heading="SmartFarm — Precision Farming Suite"
              description="From real-time field monitoring to AI-powered forecasts, SmartFarm puts intelligence at the heart of your agricultural strategy."
              buttonText="Get Started"
              buttonHref="https://wa.me/2349127483717"

            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col rounded-xl p-8 space-y-2 bg-[url('/images/home/FamOS.jpg')]
          bg-cover mx-auto lg:px-12 lg:py-12
          bg-center md:grid md:gap-8
          h-auto md:h-auto md:grid-cols-[repeat(2,auto)]"
          variants={productBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <Image
            src='/images/home/market-cart-image.png'
            alt='features'
            height={518}
            width={454}
            className='h-auto max-h-full w-full md:w-72 fetchpriority-high object-contain max-w-[300px] lg:max-w-[450px] mx-auto order-2'
          />
          <div className='order-1 lg:my-auto'>
            <ContentCardtwo
              stepNumber={3}
              heading="AgriTrade — Smart Agro-Commerce Platform"
              description="Connect. Trade. Thrive. AgriTrade digitizes trade relationships, simplifies transactions, and scales your market reach."
              buttonText="Get Started"
              buttonHref="https://wa.me/2349127483717"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Service;