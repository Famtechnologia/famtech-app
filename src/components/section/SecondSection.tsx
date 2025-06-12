'use client';
import React from 'react';
import SectionTitle from './SectionTitle';
import CardComponent from './CardComponent';
import { motion } from 'framer-motion';

const SecondSection:React.FC = () => {

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

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      },
    },
  };

  return (
    <motion.section
      className='flex flex-col items-center justify-center space-y-5 my-10
      px-4 mt-6 py-0 md:py-6 lg:mb-24 lg:mx-28 md:mx-20 max-w-5xl xl:mx-auto'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={textVariants}>
        <SectionTitle title="What we do" />
      </motion.div>
      <motion.h1
        className='text-xl lg:text-4xl lg: max-w-[600px] mx-auto text-center text-black-400'
        variants={textVariants}
      >
        We build <span className='text-green-400'>Powerful SaaS solutions</span> that help farmers
      </motion.h1>
      <motion.p
        className='text-base lg:text-lg lg: max-w-[1000px] mx-auto lg:mb-8 text-black-400 text-center px-6'
        variants={textVariants}
      >
        Whether you're running a small farm or managing large-scale agribusiness,
        Famtech delivers technology you can trust—and results you can measure.
      </motion.p>
      <CardComponent/>
    </motion.section>
  );
}

export default SecondSection;