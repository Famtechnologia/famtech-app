'use client';
import React from 'react';
import { BsDot } from "react-icons/bs";
import { FaAngleRight, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Import the original FarmOverviewCard component
import FarmOverviewCard from './FarmOverviewCard';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <Image
        src='/images/home/agriculture-healthy-food.jpg'
        alt='background'
        fill
        priority
        className='object-cover z-0'
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-20 py-20 max-w-7xl mx-auto">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-8 text-center lg:text-left max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mx-auto lg:mx-0"
          >
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Farming made Smarter</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white/60 block">Bridging</span>
              <span className="text-white block">Tradition</span>
              <span className="text-white/60 inline">and </span>
              <span className="text-white">Technology</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Famtech is reimagining farming for a connected world—bringing innovative digital solutions to fields, markets, and communities everywhere.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <motion.a
              href='/auth/register'
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Join Waitlist</span>
              <FaAngleRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            <motion.a
              href='#'
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay className="mr-2 text-xs" />
              <span>Watch Demo</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8"
          >
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/60 text-sm">Active Farms</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-white/60 text-sm">Satisfaction</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/60 text-sm">Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Farm Overview Card */}
        <motion.div
          className="hidden lg:block flex-shrink-0 ml-12"
          variants={floatingVariants}
          animate="animate"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <FarmOverviewCard
            soilMoisture={72}
            tasksCompleted={64}
            weatherTemp="18-22°"
            cornValue="6.14"
            cornTrend="down"
            soybeansValue="6.14"
            soybeansTrend="up"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </motion.div>
    </main>
  );
};

export default Home;