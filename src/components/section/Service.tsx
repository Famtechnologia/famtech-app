import React from 'react'
import SectionTitle from './SectionTitle'
import KeyFeatures from './KeyFeatures'
import ContentCard from './ContentCard'
import Image from 'next/image'
const Service = () => {
  return (
    <div className='flex flex-col space-y-4 mx-4 my-16 md:mx-12 lg:mx-28'>
        <SectionTitle title='Our Product' />
        <h1 className='text-lg lg:text-3xl lg:max-w-[600px] mx-auto text-center text-black-400'>
        <span className='text-green-400 mb-2'>Agriculture is changing.</span> We make sure you stay ahead of it.</h1>
        <div className='space-y-6'>
        <div className="flex flex-col md:flex-row-reverse rounded-xl pb-4 space-y-3 bg-[url('/FamOS.png')]
        bg-cover md:px-6 md:py-6 md:space-x-4
        bg-center lg:px-8 lg:py-8 lg:justify-between
        md:h-auto h-auto">
        <KeyFeatures/> 
        <ContentCard
        stepNumber={1}
          heading="FamOS — Farm Operating System"
          description="Digitize your daily operations with a platform designed to manage crops, livestock, teams, finances, and records—all in one place."
          buttonText="Get Started"
          buttonHref="/get-started-famos"
          
        />
        </div>

        <div className=" flex flex-col md:flex-row rounded-xl pb-4 p-8  space-y-2 bg-[url('/FamOS.png')]
        bg-cover md:px-6
        bg-center md:justify-between
        h-auto md:h-auto ">
        <Image
        src='/features.png'
        alt='features'
        height={518}
        width={454}
        className='h-auto max-h-full w-full md:w-74 object-contain max-w-[300px] mx-auto lg:ml-3'
        />
        <div className=' lg:my-auto md:ml-3 lg:ml-0'>
        <ContentCard
        stepNumber={2}
          heading="SmartFarm — Precision Farming Suite"
          description="From real-time field monitoring to AI-powered forecasts, SmartFarm puts intelligence at the heart of your agricultural strategy."
          buttonText="Get Started"
          buttonHref="/get-started-famos"
        />
        </div>
        </div>

        <div className=" flex flex-col md:flex-row-reverse rounded-xl pb-4 p-8  space-y-2 bg-[url('/FamOS.png')]
        bg-cover md:px-6
        bg-center md:justify-between
        h-auto md:h-auto">
        <Image
        src='/market-cart.png'
        alt='features'
        height={518}
        width={454}
        className='h-auto max-h-full w-full md:w-72 object-contain max-w-[300px] mx-auto'
        />
        <ContentCard
        stepNumber={3}
          heading="AgriTrade — Smart Agro-Commerce Platform"
          description="Connect. Trade. Thrive. 
AgriTrade digitizes trade relationships, simplifies transactions, and scales your market reach."
          buttonText="Get Started"
          buttonHref="/get-started-famos"
        />
        </div>
        </div>
    </div>

  )
}

export default Service