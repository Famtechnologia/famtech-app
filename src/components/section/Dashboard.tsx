'use client';
import React from 'react';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SectionTitle = ({ title }) => (
  <div className="relative">
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
    <span className="inline-block px-4 py-2 text-sm font-medium tracking-wider uppercase text-emerald-600 bg-emerald-50 rounded-full border border-emerald-100">
      {title}
    </span>
  </div>
);


const Dashboard: React.FC = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
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

  const buttonVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [0, 1, -1, 0],
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
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
        <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-teal-200/10 to-emerald-200/10 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className='relative max-w-7xl mx-auto px-6 py-20 lg:py-32'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div variants={textVariants} className="text-center mb-16">
          <SectionTitle title='Dashboard'/>
        </motion.div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Content Section */}
          <motion.div 
            className='lg:order-1 space-y-8'
            variants={textVariants}
          >
            <div className="space-y-6">
              <motion.h2 
                className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight'
                variants={textVariants}
              >
                Your Farm&apos;s
                <span className="relative inline-block ml-3">
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    Command Center
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-emerald-200/60 to-teal-200/60 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  ></motion.div>
                </span>
              </motion.h2>
              
              <motion.p 
                className='text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg'
                variants={textVariants}
              >
                Digitize your daily operations with a platform designed to manage crops, livestock, teams, finances, and records—all in one place.
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div 
              className="space-y-4"
              variants={textVariants}
            >
              {[
                'Real-time crop monitoring',
                'Livestock management',
                'Team coordination',
                'Financial tracking',
                'Comprehensive reporting'
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={buttonVariants}>
              <motion.a
                href="https://wa.me/2349127483717"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">Get Started</span>
                <motion.div
                  className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaAngleRight size={14} />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className='lg:order-2 relative'
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative">
              {/* Floating animation wrapper */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative z-10"
              >
                {/* Dashboard frame */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-4 shadow-2xl">
                  {/* Browser-like header */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 ml-4">
                      <div className="h-2 bg-gray-700 rounded-full w-32"></div>
                    </div>
                  </div>
                  
                  {/* Dashboard image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src='/dashboard-preview.png'
                      alt='famtech dashboard preview'
                      width={1000}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-3xl blur-xl -z-10"></div>
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                }}
              ></motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full"
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          className="flex items-center justify-center mt-20"
          variants={textVariants}
        >
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <div className="w-16 h-px bg-gradient-to-r from-gray-300 to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;