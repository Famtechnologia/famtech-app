'use client'

import React from 'react'
import { motion } from 'framer-motion';

const PreFooter: React.FC = () => {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.3,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 py-20 mb-0 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Section */}
          <motion.div className="text-center lg:text-left space-y-8" variants={textVariants}>
            
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span>Ready to Transform Your Farm?</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              variants={textVariants}
            >
              <span className="block text-white mb-2">Join the</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Future of Farming
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={textVariants}
            >
              At <span className="font-semibold text-emerald-400">Famtech</span>, we believe in the power of technology to change lives.
              Whether you&apos;re a small-scale farmer looking to increase your yield or
              a large agribusiness in need of custom-built farm management software,
              <span className="font-semibold text-cyan-400"> Famtech is here to help you achieve more with less.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              variants={buttonVariants}
            >
              {/* Primary Button */}
              <motion.button
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center space-x-3 min-w-[200px] justify-center"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Book a Free Demo</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
                
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-3 min-w-[200px] justify-center"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  borderColor: "rgba(255, 255, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Talk to Our Team</span>
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Main image container with glassmorphism effect */}
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.4 }
                }}
              >
                <img
                  src="/images/prefooter/famtech-farmer-using-app.jpg"
                  alt="Farmer using Famtech application"
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ width: '400px', height: '500px' }}
                  onError={(e) => { 
                    e.currentTarget.src = 'https://placehold.co/400x500/1f2937/10b981?text=Farmer+Using+Famtech+App'; 
                    e.currentTarget.onerror = null; 
                  }}
                />
                
                {/* Image overlay gradient */}
                <div className="absolute inset-4 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl pointer-events-none" />
              </motion.div>

              {/* Floating stats cards */}
              <motion.div
                className="absolute -top-4 -left-4 bg-emerald-500 text-white px-4 py-3 rounded-2xl shadow-xl backdrop-blur-sm border border-emerald-400/20"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [-5, -3, -5]
                }}
                // transition={{
                //   duration: 4,
                //   repeat: Infinity,
                //   ease: "easeInOut"
                // }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">98%</div>
                  <div className="text-xs opacity-90">Success Rate</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-cyan-500 text-white px-4 py-3 rounded-2xl shadow-xl backdrop-blur-sm border border-cyan-400/20"
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                animate={{ 
                  y: [5, -5, 5],
                  rotate: [5, 7, 5]
                }}
                // transition={{
                //   duration: 4,
                //   repeat: Infinity,
                //   ease: "easeInOut",
                //   delay: 2
                // }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">10K+</div>
                  <div className="text-xs opacity-90">Happy Farmers</div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-8 right-8 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom section with additional info */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm md:text-base">
            Trusted by thousands of farmers worldwide • Available 24/7 • No long-term contracts
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PreFooter;