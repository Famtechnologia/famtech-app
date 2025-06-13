'use client';

import React from 'react';
import SectionTitle from '../section/SectionTitle';
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegLightbulb, FaConnectdevelop } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiDavinciresolve } from "react-icons/si";
import { motion } from 'framer-motion';

const featureCardItemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const FeatureCard = ({ icon: Icon, title, description, isDark = false, index }) => {
  const isAccent = index % 3 === 1; // Middle cards in each row get accent styling
  
  return (
    <motion.div
      className={`
        group relative overflow-hidden
        ${isDark 
          ? 'bg-gradient-to-br from-emerald-600 via-emerald-700 to-cyan-700 text-white' 
          : isAccent 
            ? 'bg-gradient-to-br from-slate-50 to-white border border-emerald-100'
            : 'bg-gradient-to-br from-white to-slate-50 border border-slate-200'
        }
        rounded-2xl shadow-lg hover:shadow-2xl
        p-8 transition-all duration-500
        min-h-[280px] flex flex-col
        hover:scale-[1.02] hover:-translate-y-2
        backdrop-blur-sm
      `}
      variants={featureCardItemVariants}
      whileHover={{ 
        boxShadow: isDark 
          ? "0 25px 50px -12px rgba(16, 185, 129, 0.25)" 
          : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Background Pattern */}
      <div className={`
        absolute inset-0 opacity-5 
        ${isDark ? 'opacity-10' : ''}
      `}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(16,185,129,0.03)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      {/* Gradient Orb */}
      <motion.div
        className={`
          absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-xl
          ${isDark 
            ? 'bg-gradient-to-br from-cyan-400 to-emerald-300' 
            : 'bg-gradient-to-br from-emerald-400 to-cyan-500'
          }
        `}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Icon Container */}
      <motion.div
        className={`
          relative z-10 mb-6 p-4 rounded-xl w-fit
          ${isDark 
            ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
            : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100'
          }
        `}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        {Icon && (
          <Icon 
            className={`
              w-8 h-8 
              ${isDark ? 'text-white' : 'text-emerald-600'}
            `} 
          />
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <motion.h3
          className={`
            text-xl font-bold mb-4 leading-tight
            ${isDark ? 'text-white' : 'text-slate-800'}
          `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className={`
            text-sm leading-relaxed
            ${isDark ? 'text-slate-100' : 'text-slate-600'}
          `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Hover Arrow */}
      <motion.div
        className={`
          absolute bottom-6 right-6 opacity-0 group-hover:opacity-100
          transition-all duration-300 
          ${isDark ? 'text-white' : 'text-emerald-600'}
        `}
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </motion.div>

      {/* Shimmer Effect on Hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ x: "-100%" }}
        whileHover={{ 
          x: "100%",
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </motion.div>
    </motion.div>
  );
};

const WhyChooseFamtechSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
  };

  const textVariants = {
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

  const features = [
    {
      icon: AiOutlineGlobal,
      title: "Global Reach",
      description: "We serve farmers and agribusinesses worldwide, helping them adapt to modern agricultural challenges with cutting-edge solutions.",
      isDark: false
    },
    {
      icon: FaRegLightbulb,
      title: "Advanced Technology",
      description: "Our AI-powered software provides real-time insights and predictive analytics to support intelligent decision-making.",
      isDark: true
    },
    {
      icon: MdOutlineMessage,
      title: "Farmer-Focused Approach",
      description: "Our mission extends to farmers and food businesses everywhere, enabling them to thrive amidst today's agricultural complexities.",
      isDark: false
    },
    {
      icon: TbBrandGoogleAnalytics,
      title: "Scalable Solutions",
      description: "Whether you're a smallholder or a commercial farm, our intelligent tools seamlessly grow with your expanding business.",
      isDark: false
    },
    {
      icon: FaConnectdevelop,
      title: "Data-Driven Insights",
      description: "We transform raw farm data into actionable intelligence that drives superior productivity and sustainable profitability.",
      isDark: true
    },
    {
      icon: SiDavinciresolve,
      title: "Future-Ready Innovation",
      description: "Preparing agriculture for tomorrow's challenges with revolutionary and adaptive technologies that evolve with your needs.",
      isDark: false
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-300/5 to-cyan-300/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div variants={textVariants}>
            <SectionTitle title='Why Choose Famtech'/>
          </motion.div>
          
          <motion.h2
            className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
            variants={textVariants}
          >
            Smart Farming Starts Here –{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Innovate, Optimize,
            </span>{' '}
            and{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Grow
            </span>
          </motion.h2>
          
          <motion.p
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Discover why thousands of farmers worldwide trust Famtech to transform their agricultural operations with intelligent, data-driven solutions.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isDark={feature.isDark}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Ready to Transform Your Farm?</span>
          </div>
          
          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Today</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
            
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseFamtechSection;