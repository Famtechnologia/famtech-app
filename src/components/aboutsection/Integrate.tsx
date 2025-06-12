'use client';

import React from 'react';
import SectionTitle from '../section/SectionTitle';
import { motion } from 'framer-motion';
import Image from 'next/image'

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

const FeatureItem = ({ title, description }) => {
  return (
    <motion.div className="flex items-start mb-10 " variants={itemFadeUpVariants}>
      <span className="flex-shrink-0 text-green-500 mr-3 mt-1">
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8"/>
        </svg>
      </span>
      <div>
        <h3 className=" text-base lg:text-lg font-semibold text-gray-800">{title}</h3>
        <p className=" text-xs md:text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const FarmTechGlobalSection = () => {
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

  const imageGridItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="my-10 px-4 sm:px-6 lg:px-28 md:mx-15 md:my-15 lg:my-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariants}>
          <SectionTitle title='What We Stand For'/>
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold lg:mt-8
          text-black text-left md:text-center mt-4 mb-4 md:mb-12"
          variants={textVariants}
        >
          Integrating Smart Farming Globally
        </motion.h2>
        <motion.p
          className="text-[15px] md:text-base hidden lg:flex text-gray-700 mb-8 leading-relaxed"
          variants={textVariants}
        >
          To revolutionize agriculture through technology, intelligence, and automation,
          making farming more efficient, profitable, and sustainable for everyone.
        </motion.p>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-12 items-center justify-center">
          <div className="lg:w-1/2 text-left">
            <motion.p
              className="text-[15px] md:text-base lg:hidden text-gray-700 mb-8 leading-relaxed"
              variants={textVariants}
            >
              To revolutionize agriculture through technology, intelligence, and automation,
              making farming more efficient, profitable, and sustainable for everyone.
            </motion.p>

            <motion.div variants={containerVariants}> {/* Container for FeatureItems staggering */}
              <FeatureItem
                title="Innovation"
                description="We develop cutting-edge solutions that simplify farm management."
              />
              <FeatureItem
                title="Empowerment"
                description="We equip farmers with the knowledge and tools to make informed decisions."
              />
              <FeatureItem
                title="Efficiency"
                description="We help farmers reduce waste, increase yields, and improve profitability."
              />
              <FeatureItem
                title="Sustainability"
                description="We promote responsible farming that protects the environment."
              />
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2 w-full"
            variants={containerVariants} // Container for image grid staggering
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
              <motion.div className="relative overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9 y" variants={imageGridItemVariants}>
                <Image
                  src="/images/about/famtech-farmer-monitoring-crops-tablet.jpg"
                  alt="Farmer using technology"
                  width={369}
                  height={270}
                  className="w-full h-full object-cover loading-lazy fetchpriority-high"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/C0C0C0/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
              </motion.div>

              <motion.div className="relative overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9 loading-lazy" variants={imageGridItemVariants}>
                <Image
                  src="/images/about/community-planting-seedling.jpg"
                  alt="Hands holding a plant"
                  width={369}
                  height={270}
                  className="w-full h-full object-cover loading-lazy fetchpriority-high"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/A0A0A0/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
              </motion.div>

              <motion.div className="relative overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9" variants={imageGridItemVariants}>
                <Image
                  src="/images/about/sustainable-investment-growth.png"
                  alt="Small plants growing"
                  width={369}
                  height={270}
                  className="w-full h-full object-cover  fetchpriority-high"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/808080/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
              </motion.div>

              <motion.div className="relative overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9 loading-lazy" variants={imageGridItemVariants}>
                <Image
                  src="/images/about/farming-indoor-crops.jpg"
                  alt="Vertical farming"
                  width={369}
                  height={270}
                  className="w-full h-full object-cover fetchpriority-high"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/606060/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FarmTechGlobalSection;