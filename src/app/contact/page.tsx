'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/section/Navbar2';
import Footer from '@/components/section/Footer';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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

  const formItemVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageHeroVariants = {
    hidden: { opacity: 1, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const sectionContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 1, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };


  return (
    <>
      <div className='flex flex-col space-y-2 max-w-7xl mx-auto bg-gray-100'>
        <Navbar/>
        <motion.div
          variants={imageHeroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <Image
            src="/images/contact/Contact-us-image.jpg"
            alt="Farmland view"
            width={1440}
            height={457}
            priority
            className=" md:h-fill filter brightness-50 loading-lazy bg-black  fetchpriority-high mt-4"
          />
        </motion.div>
        
        <motion.section
          className="
            flex flex-col md:flex-row
            px-4 py-8
            md:mx-10 md:my-20 lg:mx-28 lg:my-20
            gap-8 md:gap-12 lg:gap-12
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionContainerVariants}
        >
          <motion.div
            className="
              w-full md:w-1/2 lg:w-[55%]
              flex flex-col gap-6
              mt-6 md:mt-0
              text-center md:text-left
            "
            variants={columnVariants}
          >
            <motion.h1
              className="
                text-2xl sm:text-2xl md:text-[30px] lg:text-[40px]
                tracking-[-0.075em] lg:tracking-[-1.2px] font-medium
                w-full
                leading-tight sm:leading-[50px] lg:leading-[56px]
              "
              variants={textVariants}
            >
              We're Here to support Your Farming Journey
            </motion.h1>
            
            <motion.p
              className="
                text-[#3C4049] font-inter font-normal
                text-base leading-relaxed lg:leading-[32px]
                tracking-[-0.017em] lg:tracking-[-0.27px]
                mb-4 md:mb-0
              "
              variants={textVariants}
            >
              At Famtech, we believe that the future of farming lies in smart
              technology and data-driven insights. Our mission is to empower
              farmers, agribusinesses, and industry stakeholders with innovative,
              AI-powered solutions that enhance productivity, sustainability, and
              profitability.
            </motion.p>
          </motion.div>

          <motion.div
            className="
              w-full md:w-1/2
              flex flex-col gap-6 bg-gray-100
            "
            variants={columnVariants}
          >
            <motion.form
              className="
                bg-gray-100 rounded-lg
                flex flex-col gap-3 md:gap-6
              "
              action=""
              variants={sectionContainerVariants} // Stagger form elements
            >
              <motion.input
                name="email"
                type="email"
                placeholder="Email"
                className=" p-4
                  md:p-6 text-[#9EA2AD] bg-white w-full text-sm
                  rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500
                "
                variants={formItemVariants}
              />

              <motion.textarea
                name="message"
                placeholder="Message"
                className=" p-4 text-sm
                    md:pb-36 md:p-6 text-[#9EA2AD] bg-white w-full
                  rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-green-500
                "
                rows={5}
                variants={formItemVariants}
              ></motion.textarea>
            </motion.form>


            <motion.div className="w-fill" variants={formItemVariants}>
              <a
                href="#"
                aria-label="Send message via WhatsApp"
                className="
                  flex items-center justify-center
                  py-3 md:py-4
                  text-white no-underline
                  font-inter font-medium text-base
                  bg-green-600 w-full
                  rounded-xl
                  shadow-md hover:shadow-lg
                  transition-all duration-300 ease-in-out
                  hover:bg-white hover:text-[#008000] hover:border hover:border-[#008000]
                  mx-auto md:w-auto md:max-w-[50%]
                  max-w-full
                "
              >
                Send Message
              </a>
            </motion.div>
          </motion.div>
        </motion.section>
        <Footer/>
      </div>
    </>
  );
};

export default ContactSection;