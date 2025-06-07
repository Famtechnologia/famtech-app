'use client';

import React from 'react';
import SectionTitle from '../section/SectionTitle';

const FeatureItem = ({ title, description }) => {
  return (
    <div className="flex items-start mb-10 ">
      <span className="flex-shrink-0 text-green-500 mr-3 mt-1">
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8"/>
        </svg>
      </span>
      <div>
        <h3 className=" text-base lg:text-lg font-semibold text-gray-800">{title}</h3>
        <p className=" text-xs md:text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FarmTechGlobalSection = () => {
  return (
    <div className=" my-10 px-4 sm:px-6 lg:px-28 md:mx-15 md:my-15 lg:my-30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title='What We Stand For'/>
        <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold lg:mt-8
         text-black text-left md:text-center mt-4 mb-4 md:mb-12">
          Integrating Smart Farming Globally
        </h2>
 <p className="text-[15px] md:text-base hidden lg:flex text-gray-700 mb-8 leading-relaxed">
              To revolutionize agriculture through technology, intelligence, and automation,
              making farming more efficient, profitable, and sustainable for everyone.
            </p>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-12 items-center justify-center">
          <div className="lg:w-1/2 text-left">
            <p className="text-[15px] md:text-base lg:hidden  text-gray-700 mb-8 leading-relaxed">
              To revolutionize agriculture through technology, intelligence, and automation,
              making farming more efficient, profitable, and sustainable for everyone.
            </p>

            <div>
              <FeatureItem
                title="Innovation"
                description="We develop cutting-edge solutions that simplify farm management."
              />
              <FeatureItem
                title="Empowerment"
                description="We equip farmers with the knowledge and tools to make informed decisions."
              />
              <FeatureItem
                title="Efficiency"
                description="We help farmers reduce waste, increase yields, and improve profitability."
              />
              <FeatureItem
                title="Sustainability"
                description="We promote responsible farming that protects the environment."
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  md:gap-4"> 
              <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                <img
                  src="/famtech-farmer-monitoring-crops-tablet.png"
                  alt="Farmer using technology"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/C0C0C0/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                <img
                  src="/community-planting-seedling.png"
                  alt="Hands holding a plant"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/A0A0A0/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                <img
                  src="/sustainable-investment-growth.png"
                  alt="Small plants growing"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/808080/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                <img
                  src="/farming-indoor-crops.png"
                  alt="Vertical farming"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/606060/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmTechGlobalSection;