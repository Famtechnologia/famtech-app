'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Wheat } from 'lucide-react';

const FirstSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
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
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  };

  const numberVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 200,
        damping: 20
      },
    },
  };

  const stats = [
    {
      number: '30+',
      label: 'Professional Teams',
      icon: Users,
      gradient: 'from-emerald-500 to-teal-600',
      shadow: 'shadow-emerald-500/30'
    },
    {
      number: '177+',
      label: 'Active Users',
      icon: Rocket,
      gradient: 'from-blue-500 to-cyan-600',
      shadow: 'shadow-blue-500/30'
    },
    {
      number: '2K+',
      label: 'Managing Acres of Land',
      icon: Wheat,
      gradient: 'from-amber-500 to-orange-600',
      shadow: 'shadow-amber-500/30'
    }
  ];

  return (
    <motion.section
      className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, ease: 'easeOut' } 
              }}
            >
              {/* Card */}
              <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Icon badge */}
                <div className={`mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg ${stat.shadow} ring-1 ring-white/40 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" strokeWidth={2.25} />
                </div>

                {/* Number */}
                <motion.div
                  className={`text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  variants={numberVariants}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <p className="text-slate-500 font-semibold text-sm lg:text-base leading-relaxed">
                  {stat.label}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-xl`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Text Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={textVariants}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-24" />
            <div className="mx-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-24" />
          </div>

          {/* Main text */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed text-slate-700 font-light"
            variants={textVariants}
          >
            At{' '}
            <motion.span 
              className="relative inline-block font-semibold text-emerald-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">Famtech</span>
              <motion.span
                className="absolute inset-0 bg-emerald-100 rounded-lg -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ originX: 0 }}
              />
            </motion.span>
            , we empower farmers, agribusinesses, and governments with{' '}
            <span className="font-medium text-slate-800">intelligent tools</span> to transform 
            agricultural{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">
              productivity, profitability, and sustainability
            </span>.
          </motion.p>

        </motion.div>
      </div>

      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </motion.section>
  );
};

export default FirstSection;