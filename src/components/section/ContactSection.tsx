'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/section/Navbar2';
import Footer from '@/components/section/Footer';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageHeroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="flex flex-col space-y-2 max-w-7xl ">
      <Navbar />

      <motion.div
        variants={imageHeroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="overflow-hidden rounded-2xl shadow-lg mt-6"
      >
        <Image
          src="/images/contact/Contact-us-image.jpg"
          alt="Farmland view"
          width={1440}
          height={457}
          priority
          className="w-full object-cover brightness-50"
        />
      </motion.div>

      <motion.section
        className="flex flex-col md:flex-row py-16 gap-12 px-4 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionContainerVariants}
      >
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left"
          variants={columnVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
            We&apos;re here to support Your 
            <span className="block text-emerald-600">Farming Journey</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            variants={textVariants}
          >
            At Famtech, we believe the future of farming lies in smart
            technology and data-driven insights. Our mission is to empower
            farmers and agribusinesses with AI-powered solutions that enhance
            productivity and sustainability.
          </motion.p>
        </motion.div>

        <motion.div className="w-full md:w-1/2" variants={columnVariants}>
          <motion.form
            className="p-6 md:p-8 rounded-2xl  space-y-6"
            action=""
            variants={sectionContainerVariants}
          >
            <motion.input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-900"
              variants={formItemVariants}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-4 resize-y focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-900"
              variants={formItemVariants}
            ></motion.textarea>

            <motion.div variants={formItemVariants}>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white font-medium text-lg rounded-xl transition hover:bg-white hover:text-green-600 border border-transparent hover:border-green-600"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ContactSection;
