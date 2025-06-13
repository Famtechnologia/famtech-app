'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Modern SectionTitle component with enhanced styling
const ModernSectionTitle = ({ title }) => (
  <div className="relative mb-8">
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-20"
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
    <motion.span
      className="relative inline-block text-sm md:text-base font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {title}
    </motion.span>
  </div>
);

// Enhanced FeatureItem with modern design
const ModernFeatureItem = ({ title, description, icon, index }) => {
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: index * 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1 + 0.2,
      },
    },
  };

  return (
    <motion.div 
      className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 mb-6 overflow-hidden"
      whileHover={{ 
        scale: 1.03,
        y: -5,
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Icon and content */}
      <div className="relative flex items-start space-x-4">
        <motion.div
          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg"
          variants={iconVariants}
        >
          <span className="text-xl">{icon}</span>
        </motion.div>
        
        <motion.div className="flex-1" variants={contentVariants}>
          <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-emerald-200 to-cyan-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

// Enhanced ImageCard component
const ModernImageCard = ({ src, alt, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3] bg-gray-100"
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        rotate: index % 2 === 0 ? 2 : -2,
        transition: { duration: 0.4 }
      }}
    >
      {/* Image with overlay effects */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { 
            e.currentTarget.src = `https://placehold.co/600x400/e5e7eb/6b7280?text=${encodeURIComponent(alt)}`; 
            e.currentTarget.onerror = null; 
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated border */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/50 rounded-3xl transition-colors duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>

      {/* Floating decoration */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </motion.div>
  );
};

const FarmTechGlobalSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const features = [
    {
      title: "Innovation",
      description: "We develop cutting-edge solutions that simplify farm management and revolutionize agricultural practices.",
      icon: "🚀"
    },
    {
      title: "Empowerment",
      description: "We equip farmers with advanced knowledge and intelligent tools to make data-driven decisions.",
      icon: "💡"
    },
    {
      title: "Efficiency",
      description: "We help farmers optimize resources, reduce waste, increase yields, and maximize profitability.",
      icon: "⚡"
    },
    {
      title: "Sustainability",
      description: "We promote eco-friendly farming practices that protect our environment for future generations.",
      icon: "🌱"
    }
  ];

  const images = [
    "/images/about/famtech-farmer-monitoring-crops-tablet.jpg",
    "/images/about/community-planting-seedling.jpg",
    "/images/about/sustainable-investment-growth.png",
    "/images/about/farming-indoor-crops.jpg"
  ];

  const imageAlts = [
    "Farmer using advanced technology",
    "Community collaborative farming",
    "Sustainable growth investment",
    "Modern indoor farming systems"
  ];

  return (
    <div className="relative min-h-screen py-16 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-40 h-40 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-60 right-32 w-32 h-32  rounded-full opacity-25"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div variants={textVariants}>
            <ModernSectionTitle title="What We Stand For" />
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-emerald-700 to-cyan-700 bg-clip-text text-transparent mb-6"
            variants={textVariants}
          >
            Integrating Smart Farming
            <span className="block text-emerald-600">Globally</span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            To revolutionize agriculture through technology, intelligence, and automation,
            making farming more <span className="font-semibold text-emerald-600">efficient</span>, 
            <span className="font-semibold text-cyan-600"> profitable</span>, and 
            <span className="font-semibold text-blue-600"> sustainable</span> for everyone.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Features Section */}
          <motion.div 
            className="space-y-2"
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8"
              variants={textVariants}
            >
              Our Core Values
            </motion.h3>
            {features.map((feature, index) => (
              <ModernFeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </motion.div>

          {/* Images Section */}
          <motion.div
            className="relative"
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 lg:text-center"
              variants={textVariants}
            >
              Our Impact
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((src, index) => (
                <ModernImageCard
                  key={index}
                  src={src}
                  alt={imageAlts[index]}
                  index={index}
                />
              ))}
            </div>
            
            {/* Decorative stats overlay */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm opacity-90">Farmers Empowered</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          variants={textVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🌍</span>
            <span>Join the Agricultural Revolution</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FarmTechGlobalSection;