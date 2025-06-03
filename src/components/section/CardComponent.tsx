'use client'; 
import React from 'react';
import Image from 'next/image';

const CardComponent: React.FC = () => {
  return (
    <section className='flex flex-col md:flex-row md:justify-center lg:justify-center lg:items-center  md:space-x-2
     space-y-4 mx-auto lg:mt-12'>

    <div
      className="
        relative flex flex-col items-center 
         h-[250px] w-[250px] 
        sm:h-[250px] sm:w-[280px] 
        md:h-[250px] md:w-[220px] 
        lg:h-[300px] lg:w-[250px] 
        rounded-2xl p-4 
        overflow-hidden
        text-center 
          mx-auto md:mx-2
      "
      style={{
        backgroundColor: '#F4F4F4', 
      }}
    >
      {/* --- Graphic Section --- */}
      <div className="relative z-10 flex h-2/3 w-full items-center justify-center ">
        <Image
          src="/data-management-hub.png" 
          alt="Abstract graphic representing tracking and managing operations"
          width={400}
          height={400} 
          className="h-auto max-h-full w-full object-contain mt-6 " 
        />
      </div>

      {/* --- Text Section --- */}
      <div className="z-10 px-2  h-1/3">
        <h3 className="text-sm sm:text-sm lg:text-lg font-medium leading-tight text-gray-500 tracking-tight ">
          <span className="text-green-500">Track</span> and
          <span className="text-green-600"> Manage</span> Operations Seamlessly
        </h3>
      </div>
    </div>

    <div
      className="
        relative flex flex-col items-center 
         h-[250px] w-[250px] 
        sm:h-[250px] sm:w-[280px] 
        md:h-[250px] md:w-[220px] 
        lg:h-[300px] lg:w-[250px] 
        rounded-2xl p-4 
        overflow-hidden
        text-center 
          mx-auto md:mx-2 lg:mb-2 
      "
      style={{
        backgroundColor: '#F4F4F4', 
      }}
    >
      {/* --- Graphic Section --- */}
      <div className="relative z-10 flex h-2/3 w-full items-center justify-center ">
        <Image
          src="/healthy-crop-monitoring.png" 
          alt=" healthy crop monitoring and technology in agriculture."
          width={400}
          height={400} 
          className="h-auto max-h-full w-full object-contain mt-6 " 
        />
      </div>

      {/* --- Text Section --- */}
      <div className="z-10 px-2  h-1/3">
        <h3 className="text-sm sm:text-sm lg:text-lg font-medium leading-tight text-gray-500 tracking-tight ">
          <span className="text-green-500">Prevent</span> and
          <span className="text-green-600"> Predict</span> crop and livestock diseases
        </h3>
      </div>
    </div>
    
     <div
      className="
        relative flex flex-col items-center 
        h-[250px] w-[250px] 
        sm:h-[250px] sm:w-[280px] 
        md:h-[250px] md:w-[220px] 
        lg:h-[300px] lg:w-[250px] 
        rounded-2xl p-4 
        overflow-hidden
        text-center 
          mx-auto md:mx-2 lg:mb-3
      "
      style={{
        backgroundColor: '#F4F4F4', 
      }}
    >
      {/* --- Graphic Section --- */}
      <div className="relative z-10 flex h-2/3 w-full items-center justify-center ">
        <Image
          src="/market-access-cart.png" 
          alt=" Illustrated shopping cart"
          width={400}
          height={400} 
          className="h-auto max-h-full w-full object-contain mt-6 " 
        />
      </div>

      {/* --- Text Section --- */}
      <div className="z-10 px-2  h-1/3">
        <h3 className="text-sm sm:text-sm lg:text-lg font-medium leading-tight text-gray-500 tracking-tight ">
          <span className="text-green-500">Buy products</span> with
           with ease on digital marketplaces
        </h3>
      </div>
    </div>

    
    
    </section>
  );
};

export default CardComponent;

