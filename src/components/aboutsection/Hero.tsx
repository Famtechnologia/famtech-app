'use client';

import React from 'react';

const Hero:React.FC = () => {
  return (
    <div className="bg-white py-8 pb-4 mx-4 md:mx-15 sm:px-6  lg:mt-28 mt-8 md:mt-12">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden bg-green-50 md:bg-white">
        

        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 p-2 lg:p-4 text-left flex items-center ">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[41px]  lg:leading-16
               font-bold text-gray-900 text-left pt-8 lg:pt-12 lg:pb-8 pb-6 px-0">
          Harnessing Technology to Transform Agriculture
        </h2>
              <p className=" text-sm lg:text-lg md:text-sm text-gray-700 mb-0 md:mb-8 leading-relaxed">
                At Famtech, we believe that the future of farming lies in smart technology and data-driven insights.
                Our mission is to empower farmers, agribusinesses, and industry stakeholders with innovative, AI-powered solutions that enhance productivity, sustainability, and profitability.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative rounded-xl lg:rounded-none md:rounded-bl-xl overflow-hidden">
         
            <div className="
              relative w-full h-full md:h-[480px]
              rounded-xl">
                <img
                    src="/Agricultural-technology.png"
                    alt="A person interacting with a tablet in a farm setting"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/C0C0C0/FFFFFF?text=Error'; e.currentTarget.onerror = null; }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
