'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Hero:React.FC = () => {
  const textVariants = {
    hidden: { opacity: 1, y: 30 },
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
    hidden: { opacity: 1, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.1
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
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
      className="bg-white py-8 pb-4 mx-4 md:mx-15 sm:px-6 lg:mt-28 mt-8 md:mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden bg-green-50 md:bg-white">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          <div className="lg:w-1/2 p-2 lg:p-4 text-left flex items-center ">
            <div>
              <motion.h2
                className="text-2xl md:text-3xl lg:text-[41px] lg:leading-16
                  font-bold text-gray-900 text-left pt-8 lg:pt-12 lg:pb-8 pb-6 px-0"
                variants={textVariants}
              >
                Harnessing Technology to Transform Agriculture
              </motion.h2>
              <motion.p
                className="text-sm lg:text-lg md:text-sm text-gray-700 mb-0 md:mb-8 leading-relaxed"
                variants={textVariants}
              >
                At Famtech, we believe that the future of farming lies in smart technology and data-driven insights.
                Our mission is to empower farmers, agribusinesses, and industry stakeholders with innovative, AI-powered solutions that enhance productivity, sustainability, and profitability.
              </motion.p>
            </div>
          </div>

          <motion.div
            className="lg:w-1/2 relative rounded-xl lg:rounded-none md:rounded-bl-xl overflow-hidden"
            variants={imageVariants}
          >
            <div className="relative w-full h-full md:h-[480px] rounded-xl">
                <Image
                    src="/images/about/Agricultural-technology.jpg"
                    alt="A person interacting with a tablet in a farm setting"
                    width={824}
                    height={719}
                    priority
                    className="w-full h-full object-cover rounded-xl  fetchpriority-high"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/C0C0C0/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;