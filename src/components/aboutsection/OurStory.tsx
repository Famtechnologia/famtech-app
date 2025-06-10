'use client';

import React from 'react';
import SectionTitle from '@/components/section/SectionTitle';
import { motion } from 'framer-motion';

const OurStory:React.FC = () => {
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
      className='my-10 mx-4
      md:my-15 md:mx-15 items-center justify-center
      lg:my-30 lg:mx-28 max-w-5xl xl:mx-auto '
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={textVariants}>
        <SectionTitle title='Our Story'/>
      </motion.div>
      <motion.p
        className='flex text-[12.5px] mx-auto text-center leading-5 lg:leading-8 mt-8 text-gray-600
        md:text-base'
        variants={textVariants}
      >
        Founded with a vision to bridge the gap between traditional farming and modern technology,
        Famtech was created to solve real challenges in agriculture. From unpredictable climate changes to disease
        outbreaks and inefficient farm management, we saw the need for a simpler, smarter, and more effective way
        for farmers to monitor, manage, and optimize their operations. Today, Famtech is at the forefront of
        agritech innovation, providing cutting-edge software solutions that help farmers track weather conditions,
        prevent livestock diseases, monitor crop growth, and automate farm reports—all from a single,
        easy-to-use platform.
      </motion.p>
    </motion.div>
  );
}

export default OurStory;