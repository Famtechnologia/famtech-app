'use client'; 
import React from 'react';
import Image from 'next/image';

const CardComponent: React.FC = () => {
  return (
    <section className='grid grid-rows md:gap-2 lg:gap-4  gap-4 mx-4 lg:mt-12 
    md:grid-cols-[repeat(3,1fr)] max-w-7xl lg:mx-auto  lg:mx-28'>
 
    <div
      className="relative flex flex-col items-center rounded-2xl p-4 
                overflow-hidden
                text-center 
                  mx-auto h-[250px] lg:h-[300px]"
        
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
      className="relative flex flex-col items-center rounded-2xl p-4 
                overflow-hidden
                text-center  h-[250px] lg:h-[300px]
                  mx-auto"
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
      className="relative flex flex-col items-center rounded-2xl p-4 
                overflow-hidden
                text-center lg:h-[300px]
                  mx-auto h-[250px]"
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

