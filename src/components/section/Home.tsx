'use client';
import React from 'react';
import { BsDot } from "react-icons/bs";
import { FaAngleRight } from 'react-icons/fa';
import FarmOverviewCard from './FarmOverviewCard';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: 'easeOut' },
    }),
  };

  const pathname = usePathname();
  const isOnHome = pathname === '/';
  
  return (
    <main
      className="relative w-full px-4 md:px-5 lg:px-16 pt-32 lg:pt-28 md:py-32
        bg-[url('/images/home/agriculture-healthy-food.jpg')] lg:grid-cols-[500px_1fr_auto] lg:grid lg:grid-row-[1fr_1fr_1fr_200px_1fr]
        bg-cover bg-center h-screen lg:h-auto lg:pb-24 lg:justify-start max-w-9xl mx-auto
        m-auto lg:ml-0 md:h-auto fetchpriority-high"
    >
      <div className="absolute inset-0 bg-black opacity-40 h-full md:rounded-lg"></div>

      <motion.div
        className='relative flex flex-col sm:px-2 sm:py-4 space-y-4
        items-center justify-center m-auto lg:col-span-1 lg:row-span-3
        lg:text-left lg:ml-0 mt-4 '
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.p
          className='flex px-1 py-0 bg-white text-[9px] md:text-xs
            font-normal lg:ml-0 text-black rounded-full items-center m-auto
            lg:text-left justify-center lg:ml-0 md:mb-3 lg: mb-2 lg:justify-start'
          variants={fadeUp}
          custom={0.1}
        >
          <BsDot size={20} className='text-green-600 ' />
          Farming made Smarter
        </motion.p>

        <motion.div
          className="sm:text-center m-auto font-semibold lg:ml-0 lg:text-left text-white-700"
          variants={fadeUp}
          custom={0.2}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:leading-16 xl:leading-18 text-center lg:text-left text-white lg:mb-2">
            <span className="text-gray-400">Bridging</span> Tradition
            <span className="text-gray-400"> and</span> Technology
          </h1>
        </motion.div>

        <motion.p
          className='text-[10px] font-small text-gray-200 m-auto text-center md:max-w-[600px] lg:font-light mt-2
            items-center md:px-16 md:text-[12.5px] lg:ml-0 lg:text-left lg:px-0 lg:text-xs lg:text-white'
          variants={fadeUp}
          custom={0.3}
        >
          Famtech is reimagining farming for a connected world—bringing innovative digital solutions to fields, markets, and communities everywhere.
        </motion.p>

        <motion.div
          className="flex space-x-4 m-auto lg:ml-0 mt-6 items-center"
          variants={fadeUp}
          custom={0.4}
        >
          <a href='https://wa.me/2349127483717'
            target="_blank"
            rel="noopener noreferrer"
            className='bg-green-600 text-sm text-white justify-center text-center px-2 py-2 w-34 md:w-40 lg:w-44 lg:h-10 rounded-lg
            hover:bg-white hover:text-black font-medium flex items-center' aria-label='Book a demo button'
          >
            Book a Demo <FaAngleRight size={20} className='p-1 ml-2 rounded-full bg-white text-black' />
          </a>
          <a href='#' className='bg-white text-sm text-black-500 justify-center text-center px-2 py-2
            hover:bg-green-400 w-34 md:w-40 lg:w-44 lg:h-10 rounded-lg font-medium flex items-center' aria-label='Dashboard button'>
            Dashboard
          </a>
        </motion.div>
      </motion.div>

      {isOnHome && (
        <motion.div
          className="hidden lg:grid col-start-3 row-start-3 row-end-5"
          initial={{ opacity: 0.5, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
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
      )}
    </main>
  );
};

export default Home;