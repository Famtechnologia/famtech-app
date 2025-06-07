// src/components/ContactSection.tsx
'use client';

import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image'; 
import Navbar from '@/components/section/Navbar2';
import Footer from '@/components/section/Footer'

const ContactSection: React.FC = () => {
  return (
    <>
     <div className='flex flex-col space-y-2 max-w-7xl mx-auto bg-gray-100 
     '>
        <Navbar/>
    <Image
          src="/Contact-us-image.jpg" 
          alt="Farmland view"
        width={1440}
        height={457}
          className=" h-fill filter brightness-50"
        />
        
      <section
        className="
          flex flex-col md:flex-row  
          px-4 py-8 
          md:mx-10 md:my-20 lg:mx-28 lg:my-20 
          gap-8 md:gap-12 lg:gap-12 
        "
      >
        
        <div
          className="
            w-full md:w-1/2 lg:w-[55%]
            flex flex-col gap-6 
            mt-6 md:mt-0 
            text-center md:text-left
          "
        >

          <h1
            className="
              text-2xl sm:text-2xl md:text-[30px] lg:text-[40px] 
              tracking-[-0.075em] lg:tracking-[-1.2px]  font-medium 
              w-full 
              leading-tight sm:leading-[50px] lg:leading-[56px]
            "
          >
            We're Here to support Your Farming Journey
          </h1>
          
          <p
            className="
              text-[#3C4049] font-inter font-normal 
              text-base leading-relaxed lg:leading-[32px] 
              tracking-[-0.017em] lg:tracking-[-0.27px] 
              mb-4 md:mb-0 
            "
          >
            At Famtech, we believe that the future of farming lies in smart
            technology and data-driven insights. Our mission is to empower
            farmers, agribusinesses, and industry stakeholders with innovative,
            AI-powered solutions that enhance productivity, sustainability, and
            profitability.
          </p>
        </div>


        <div
          className="
            w-full md:w-1/2
            flex flex-col gap-6 bg-gray-100
          "
        >

          <form
            className="
              bg-[#04a00403] rounded-lg
              flex flex-col gap-3 md:gap-6
            "
            action=""
          >

            <input
              name="email"
              type="email"
              placeholder="Email"
              className=" p-4
                md:p-6 text-[#9EA2AD] bg-white w-full  text-sm
                rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500
              "
            />

            <textarea
              name="message" // Changed type to name for textarea
              placeholder="Message"
              className=" p-4 text-sm
                 md:pb-36 md:p-6 text-[#9EA2AD] bg-white w-full 
                rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-green-500
              "
              rows={5}
            ></textarea>
          </form>


          <div className="w-fill">
            <a
              href="#"
              aria-label="Send message via WhatsApp"
              className="
                flex items-center justify-center 
                py-3 md:py-4
                text-white no-underline 
                font-inter font-medium text-base 
                bg-green-600 w-full 
                rounded-3xl  
                shadow-md hover:shadow-lg 
                transition-all duration-300 ease-in-out
                hover:bg-white hover:text-[#008000] hover:border hover:border-[#008000]
                mx-auto md:w-auto md:max-w-[50%] 
                max-w-full  
              "
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
      <Footer/>

      </div>
    </>
  );
};

export default ContactSection;