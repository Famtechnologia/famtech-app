'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CardComponent: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
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
    <motion.section
      className='grid grid-rows md:gap-2 lg:gap-4 gap-4 mx-4 lg:mt-12
      md:grid-cols-[repeat(3,1fr)] max-w-7xl lg:mx-auto lg:mx-28'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >

      <motion.div
        className="relative flex flex-col items-center rounded-2xl p-4
                overflow-hidden
                text-center
                  mx-auto h-[250px] lg:h-[300px]"
        style={{
          backgroundColor: '#F4F4F4',
        }}
        variants={itemVariants}
      >
        <div className="relative z-10 flex h-2/3 w-full items-center justify-center ">
          <Image
            src="/data-management-hub.png"
            alt="Abstract graphic representing tracking and managing operations"
            width={400}
            height={400}
            className="h-auto max-h-full w-full object-contain mt-6 loading-lazy fetchpriority-high"
          />
        </div>

        <div className="z-10 px-2 h-1/3">
          <h3 className="text-sm sm:text-sm lg:text-lg font-medium leading-tight text-gray-500 tracking-tight ">
            <span className="text-green-500">Track</span> and
            <span className="text-green-600"> Manage</span> Operations Seamlessly
          </h3>
        </div>
      </motion.div>

      <motion.div
        className="relative flex flex-col items-center rounded-2xl p-4
                overflow-hidden
                text-center h-[250px] lg:h-[300px]
                  mx-auto"
        style={{
          backgroundColor: '#F4F4F4',
        }}
        variants={itemVariants}
      >
        <div className="relative z-10 flex h-2/3 w-full items-center justify-center ">
          <Image
            src="/healthy-crop-monitoring.png"
            alt=" healthy crop monitoring and technology in agriculture."
            width={400}
            height={400}
            className="h-auto max-h-full w-full object-contain mt-6 loading-lazy fetchpriority-high "
          />
        </div>

        <div className="z-10 px-2 h-1/3">
          <h3 className="text-sm sm:text-sm lg:text-lg font-medium leading-tight text-gray-500 tracking-tight ">
            <span className="text-green-500">Prevent</span> and
            <span className="text-green-600"> Predict</span> crop and livestock diseases
          </h3>
        </div>
      </motion.div>
      
      <motion.div
        className="relative flex flex-col items-center rounded-2xl p-4
                overflow-hidden
                text-center lg:h-[300px]
                  mx-auto h-[250px]"
        style={{
          backgroundColor: '#F4F4F4',
        }}
        variants={itemVariants}
      >
        <div className="relative z-10 flex h-2/3 w-full items-center justify-center ">
          <Image
            src="/market-access-cart.png"
            alt=" Illustrated shopping cart"
            width={400}
            height={400}
            className="h-auto max-h-full w-full object-contain mt-6 loading-lazy fetchpriority-high "
          />
        </div>

        <div className="z-10 px-2 h-1/3">
          <h3 className="text-sm sm:text-sm lg:text-lg font-medium leading-tight text-gray-500 tracking-tight ">
            <span className="text-green-500">Buy products</span> with
            with ease on digital marketplaces
          </h3>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CardComponent;