'use client';

import React from 'react';
import SectionTitle from '../section/SectionTitle';
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegLightbulb, FaConnectdevelop  } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiDavinciresolve } from "react-icons/si";




const GlobalIconSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
      clipRule="evenodd"
    />
  </svg>
);

const MonitorIconSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const FarmTractorIconSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" />
    <path fillRule="evenodd" d="M10.5 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M2.25 10.5a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-3Z" clipRule="evenodd" />
  </svg>
);

const AnalyticsIconSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M14 20h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zM4 20h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1zM17 14h-2M17 18h-2M7 14h-2M7 10h-2"></path>
  </svg>
);

const HandshakeIconSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M7.702 4.167A.75.75 0 0 1 8.25 3h7.5a.75.75 0 0 1 .548 1.167L12 10.388 7.702 4.167ZM12.915 16.275a.75.75 0 0 1 .151 1.058l-3.375 4.5a.75.75 0 0 1-1.151-.059l-3.375-4.5a.75.75 0 0 1 1.151-1.058l.675.9L9 16.5l.675-.9ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z" />
  </svg>
);

const ArrowOutwardIconSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={props.className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);


// Reusable Card Component adapted for this section
const FeatureCard = ({ icon: Icon, title, description, isDark = false }) => {
  const bgColor = isDark ? 'bg-green-600' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-gray-800';
  const descriptionColor = isDark ? 'text-gray-200' : 'text-gray-600';
  const iconColor = isDark ? 'text-white' : 'text-green-700'; // Icon color based on background
  const arrowColor = isDark ? 'text-white' : 'text-green-700';

  return (
    <div className={`
      relative
      ${bgColor}
      rounded-lg
      shadow-md
      p-6
      flex items-center justify-center
      flex-col
      items-start
      min-h-[14rem]
      transition-all
      duration-300  
      hover:shadow-lg 
    `}>
      <div className={`mb-4 ${iconColor}`}>
        {Icon && <Icon className="w-8 h-8" />}
      </div>
      <h3 className={`lg:text-lg text-base font-semibold mb-2 ${textColor}`}>
        {title}
      </h3>
      <p className={`text-xs lg:text-sm leading-relaxed flex-grow ${descriptionColor}`}>
        {description}
      </p>

      {/* Arrow icon positioned at bottom right */}
      <div className={`absolute bottom-4 right-4 ${arrowColor}`}>
        <ArrowOutwardIconSVG className="w-7 h-5" />
      </div>
    </div>
  );
};


const WhyChooseFamtechSection = () => {
  return (
    <div className=" my-10  px-4 sm:px-6 lg:px-28 md:mx-15 md:my-15 lg:my-30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title='Why Join Famtech'/>
        <h2 className="md:text-3xl text-2xl lg:text-4xl font-semibold text-gray-900 text-left
         md:text-center mt-8 lg:mt-8 mb-12">
          Smart Farming Starts Here – <span className='text-green-500'> Innovate, Optimize,</span> and<span className='text-green-500'> Grow</span>
        </h2>

        {/* Grid for Feature Cards */}
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-4 ">
          <FeatureCard
            icon={AiOutlineGlobal}
            title="Global Reach"
            description="We serve farmers and agribusinesses worldwide, helping them adapt to modern agricultural challenges."
          />
          <FeatureCard
            icon={FaRegLightbulb}
            title="Advance Technology"
            description="Our AI-powered software provides real-time insights and predictive analytics to support decision-making."
            isDark={true}
          />
          <FeatureCard
            icon={MdOutlineMessage}
            title="Farmer Focus Approach"
            description="Our mission extends to farmers and food businesses everywhere, enabling them to thrive amidst the complexities of today's agriculture."
          />
          
          <FeatureCard
            icon={TbBrandGoogleAnalytics}
            title="Scalable for All Farm Sizes"
            description="Whether you're a smallholder or a commercial farm, our tools grow with your business."
          />
          <FeatureCard
            icon={FaConnectdevelop }
            title="Data-Driven Farming"
            description="We turn raw farm data into actionable insights that drive better productivity and profitability."
            isDark={true}
          />
          <FeatureCard
            icon={ SiDavinciresolve} // Placeholder, replace with actual icon if available
            title="Future-Ready Solutions"
            description="Preparing agriculture for tomorrow's challenges with innovative and adaptive technologies."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFamtechSection;