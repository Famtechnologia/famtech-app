'use client';
import React from 'react';
import Keyfeaturestwo from './Keyfeaturestwo';
import ContentCardtwo from './ContentCardtwo';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SectionTitle = ({ title }) => (
  <div className="relative">
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
    <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider uppercase text-emerald-600 bg-emerald-50 rounded-full border border-emerald-100">
      {title}
    </span>
  </div>
);

const Service = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const productBlockVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <div className="absolute top-40 -left-20 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-96 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/15 to-emerald-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className='relative max-w-7xl mx-auto px-6 py-20 lg:py-32'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div variants={textVariants} className="mb-8">
            <SectionTitle title='Our Product'/>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight'>
              <span className='relative inline-block mb-4 block'>
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Agriculture is changing.
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-emerald-200/60 to-teal-200/60 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
              </span>
              <span className="text-gray-800">We make sure you stay ahead of it.</span>
            </h1>
          </motion.div>
        </div>

        {/* Product Blocks */}
        <div className='space-y-20'>
          {/* Product 1 - FamOS */}
          <motion.div
            className="group relative"
            variants={productBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 backdrop-blur-sm">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                <div className='lg:order-2 relative'>
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="relative z-10"
                  >
                    <Keyfeaturestwo/>
                  </motion.div>
                </div>

                <div className='lg:order-1 flex items-center'>
                  <div className="w-full">
                    <ContentCardtwo
                      stepNumber={1}
                      heading="FamOS — Farm Operating System"
                      description="Digitize your daily operations with a platform designed to manage crops, livestock, teams, finances, and records—all in one place."
                      buttonText="Get Started"
                      buttonHref="https://wa.me/2349127483717"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Product 2 - SmartFarm */}
          <motion.div
            className="group relative"
            variants={productBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 backdrop-blur-sm">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                <motion.div 
                  className="flex items-center justify-center lg:order-1"
                  variants={imageVariants}
                >
                  <div className="relative">
                    <motion.div
                      variants={floatingVariants}
                      animate="animate"
                      className="relative z-10"
                    >
                      <Image
                        src='/images/home/features.png'
                        alt='SmartFarm features'
                        height={518}
                        width={454}
                        className='h-auto w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl'
                      />
                    </motion.div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/20 to-emerald-200/20 rounded-2xl blur-xl -z-10"></div>
                  </div>
                </motion.div>
                
                <div className='lg:order-2 flex items-center'>
                  <div className="w-full">
                    <ContentCardtwo
                      stepNumber={2}
                      heading="SmartFarm — Precision Farming Suite"
                      description="From real-time field monitoring to AI-powered forecasts, SmartFarm puts intelligence at the heart of your agricultural strategy."
                      buttonText="Get Started"
                      buttonHref="https://wa.me/2349127483717"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-emerald-500"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-emerald-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Product 3 - AgriTrade */}
          <motion.div
            className="group relative"
            variants={productBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 backdrop-blur-sm">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                <motion.div 
                  className="flex items-center justify-center lg:order-2"
                  variants={imageVariants}
                >
                  <div className="relative">
                    <motion.div
                      variants={floatingVariants}
                      animate="animate"
                      className="relative z-10"
                    >
                      <Image
                        src='/images/home/market-cart-image.png'
                        alt='AgriTrade platform'
                        height={518}
                        width={454}
                        className='h-auto w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl'
                      />
                    </motion.div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-2xl blur-xl -z-10"></div>
                  </div>
                </motion.div>
                
                <div className='lg:order-1 flex items-center'>
                  <div className="w-full">
                    <ContentCardtwo
                      stepNumber={3}
                      heading="AgriTrade — Smart Agro-Commerce Platform"
                      description="Connect. Trade. Thrive. AgriTrade digitizes trade relationships, simplifies transactions, and scales your market reach."
                      buttonText="Get Started"
                      buttonHref="https://wa.me/2349127483717"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Service;