import React from 'react';
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa6";

const Onboarding = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-8 gap-4">

      {/* Left Image */}
      <div className=" w-full lg:w-1/2 hidden lg:block">
        <Image
          src="/images/onboarding/Exclude.png"
          width={400}
          height={400}
          alt="Onboarding Image"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right Content */}
      <div className="text-center w-full lg:w-1/2 bg-white pb-8 rounded-lg shadow-xl max-w-md mx-auto">
        
        {/* Logo */}
        <div className="h-24 w-24 lg:h-28 lg:w-28 flex justify-center mx-auto mt-6">
          <Image
            src="/images/onboarding/Logo 1.jpg"
            width={700}
            height={700}
            alt="logo"
            className="rounded-full"
          />
        </div>

        {/* Content with top/bottom border */}
        <div className="border-t-[1px] border-gray-300 border-b-[1px] py-8 px-4 md:px-4 rounded-2xl mt-4">
          <h2 className="text-2xl font-extrabold mb-2">
            Empowering Farmers, Connecting Markets.
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Let’s get you started with a smart way to farm while staying connected with the market.
          </p>
          
          {/* Button */}
          <a
            href="./onboarding/auth"
            className="bg-green-600 hover:bg-green-700 text-white rounded-lg flex flex-row gap-2 w-full px-4 py-3 items-center justify-center"
          >
            Get Started 
            <FaAngleRight size={16} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
