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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const statisticVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-32 w-96 h-96 bg-gradient-to-br from-green-200/15 to-teal-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-emerald-200/10 to-green-200/10 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className='relative max-w-7xl mx-auto px-6 py-20 lg:py-32'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Left Column */}
          <div className='space-y-8'>
            {/* Statistics Card */}
            <motion.div
              className='group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-green-600 p-8 lg:p-10 text-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500'
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className='relative z-10 space-y-6'>
                <motion.p 
                  className='text-sm font-medium tracking-wider uppercase opacity-90'
                  variants={itemVariants}
                >
                  Facts & Numbers
                </motion.p>
                
                <motion.div
                  className='flex items-baseline space-x-2'
                  variants={statisticVariants}
                >
                  <h2 className='font-bold text-7xl lg:text-8xl bg-gradient-to-b from-white to-green-100 bg-clip-text text-transparent'>
                    90
                  </h2>
                  <span className='text-4xl font-light opacity-90'>%</span>
                </motion.div>
                
                <motion.p 
                  className='text-lg font-medium leading-relaxed max-w-xs'
                  variants={itemVariants}
                >
                  Of customers recommend Famtech service
                </motion.p>
              </div>

              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></motion.div>
            </motion.div>

            {/* Blog Card */}
            <motion.div
              className='group relative overflow-hidden bg-gradient-to-br from-green-700 to-green-800 p-8 lg:p-10 text-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500'
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent"></div>
              
              <div className='relative z-10 space-y-6'>
                {/* Header */}
                <div className='flex items-center justify-between'>
                  <motion.span 
                    className='text-sm font-medium tracking-wider uppercase opacity-90'
                    variants={itemVariants}
                  >
                    Latest Blog
                  </motion.span>
                  <motion.a 
                    href="#" 
                    className='group/link flex items-center text-sm font-medium hover:text-green-300 transition-colors duration-300'
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    Read
                    <motion.div
                      className="ml-1"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <BsArrowRightShort size={20} />
                    </motion.div>
                  </motion.a>
                </div>

                {/* Blog Title */}
                <motion.h3 
                  className='text-xl lg:text-2xl font-semibold leading-tight'
                  variants={itemVariants}
                >
                  How to control the cost of curing rice pest today farm...
                </motion.h3>

                {/* Blog Image */}
                <motion.div
                  className='relative overflow-hidden rounded-2xl'
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent z-10"></div>
                  <Image
                    src='/images/home/fresh-vegetable-market.png'
                    alt='ripe vegetables including red tomatoes, yellow bell peppers, and green leafy lettuce'
                    height={100}
                    width={300}
                    className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className='space-y-8'>
            {/* Options Component */}
            <motion.div
              className='relative'
              variants={itemVariants}
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
              >
                <Options />
              </motion.div>
            </motion.div>

            {/* Bottom Text */}
            <motion.div
              className='relative p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg'
              variants={itemVariants}
            >
              <div className='flex items-start space-x-4'>
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <GoArrowUpRight size={24} className='text-white' />
                </motion.div>
                
                <div className='flex-1'>
                  <motion.p 
                    className='text-gray-700 text-base lg:text-lg leading-relaxed font-medium'
                    variants={itemVariants}
                  >
                    Famtech is helping farmers and agribusinesses across Nigeria and beyond{' '}
                    <span className="text-green-600 font-semibold">increase yields</span>,{' '}
                    <span className="text-green-600 font-semibold">cut costs</span>, and unlock{' '}
                    <span className="text-green-600 font-semibold">new levels of profitability</span>.
                  </motion.p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-40"></div>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          className="flex items-center justify-center mt-20"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <div className="w-16 h-px bg-gradient-to-r from-gray-300 to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FourthSection;