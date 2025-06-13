'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Modern SectionTitle component
const SectionTitle = ({ title }) => (
  <div className="relative">
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
    <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider uppercase text-emerald-600 bg-emerald-50 rounded-full border border-emerald-100">
      {title}
    </span>
  </div>
);

// Import your existing CardComponent - keeping original with images
import CardComponent from './CardComponent';

const SecondSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={backgroundVariants}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.section
        className="relative flex flex-col items-center justify-center space-y-8 py-20 px-6 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div variants={textVariants}>
          <SectionTitle title="What we do" />
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={textVariants} className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            We build{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Powerful SaaS solutions
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-emerald-200/60 to-teal-200/60 rounded-full -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.div>
            </span>{' '}
            that help farmers
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div variants={textVariants} className="text-center">
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're running a small farm or managing large-scale agribusiness,{' '}
            <span className="font-semibold text-gray-800">Famtech</span> delivers technology you can trust—and{' '}
            <span className="font-semibold text-emerald-600">results you can measure</span>.
          </p>
        </motion.div>

        {/* Decorative separator */}
        <motion.div
          variants={textVariants}
          className="flex items-center space-x-4 py-4"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <div className="w-16 h-px bg-gradient-to-r from-gray-300 to-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </motion.div>

        {/* Card Component */}
        <motion.div
          variants={textVariants}
          className="w-full pt-8"
        >
          <CardComponent />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SecondSection;