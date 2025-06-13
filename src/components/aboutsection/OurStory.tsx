'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Modern SectionTitle component with gradient and glass effect
const ModernSectionTitle = ({ title }) => (
  <div className="relative mb-16">
    <motion.div
      className="absolute inset-0  rounded-2xl blur-xl opacity-20"
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.h2
      className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-4 rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  </div>
);

const OurStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
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

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-full blur-2xl opacity-30"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-40 right-16 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-2xl opacity-25"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-200 to-emerald-200 rounded-full blur-xl opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={textVariants}>
          <ModernSectionTitle title="Our Story" />
        </motion.div>

        <motion.div
          className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/20 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Card decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
          
          {/* Floating accent elements */}
          <motion.div
            className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl opacity-40"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          <motion.p
            className="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-gray-700 font-medium relative z-10"
            variants={textVariants}
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
          >
            <motion.span
              className="inline-block text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mr-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Founded
            </motion.span>
            with a vision to bridge the gap between traditional farming and modern technology, 
            Famtech was created to solve real challenges in agriculture. From unpredictable climate changes to disease 
            outbreaks and inefficient farm management, we saw the need for a simpler, smarter, and more effective way 
            for farmers to monitor, manage, and optimize their operations.
          </motion.p>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl border-l-4 border-emerald-400 relative overflow-hidden"
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-cyan-100/20 animate-pulse" />
            <p className="text-lg md:text-xl text-gray-700 font-medium relative z-10">
              Today, <span className="font-bold text-emerald-700">Famtech</span> is at the forefront of 
              agritech innovation, providing cutting-edge software solutions that help farmers track weather conditions, 
              prevent livestock diseases, monitor crop growth, and automate farm reports—all from a single, 
              easy-to-use platform.
            </p>
          </motion.div>

          {/* Progress indicator dots */}
          <motion.div
            className="flex justify-center mt-8 space-x-2"
            variants={textVariants}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Tech badge */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20">
            <span className="flex items-center space-x-2">
              <span>🚀</span>
              <span>Agritech Innovation Leaders</span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurStory;