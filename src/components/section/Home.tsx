import React from 'react'
import { BsDot } from "react-icons/bs";
import { FaAngleRight } from 'react-icons/fa';
import FarmOverviewCard from './FarmOverviewCard';
import { usePathname } from 'next/navigation'; 

const Home:React.FC = () => {
  const pathname = usePathname(); 
  const isOnHome = pathname === '/'; 
  console.log('Current Pathname:', pathname);
  console.log('Is On Homepage:', isOnHome);
  return (
    <main className=" relative w-full px-4 md:px-5 lg:px-16 pt-32 lg:pt-28 md:py-32
        bg-[url('/agriculture-healthy-food.jpg')] lg:grid-cols-[500px_1fr_auto] lg:grid lg:grid-row-[1fr_1fr_1fr_200px_1fr]
        bg-cover bg-center h-screen lg:h-auto lg:pb-24 lg:justify-start max-w-9xl mx-auto
        m-auto lg:ml-0 md:h-auto">
         
         <div className="absolute inset-0 bg-black opacity-10 h-full md:rounded-lg
        lg:bg-transparent "></div>
       
        <div className=' relative flex flex-col sm:px-2 sm:py-4 space-y-4 
        items-center justify-center m-auto lg:col-span-1 lg:row-span-3 
        lg:text-left lg:ml-0 mt-4 '>

        <p className='flex px-1 py-0 bg-white text-[9px] md:text-xs 
         font-normal lg:ml-0 text-black rounded-full items-center m-auto
      lg:text-left  justify-center lg:ml-0 md:mb-3 lg: mb-2   lg:justify-start'><BsDot size={20} 
         className='text-green-600 '/>Farming made Smarter</p>

        <div className="sm:text-center m-auto font-semibold  lg:ml-0 lg:text-left text-white-700"> 
    <h1 className="text-4xl md:text-5xl lg:text-6xl  lg:leading-16 text-center lg:text-left  lg:mb-2 text-white">
    <span className="text-gray-400">Bridging</span> Tradition
    <span className="text-gray-400"> and</span> Technology
    </h1>
    </div>
    <p className='text-[10px] font-small text-gray-200 m-auto text-center md:max-w-[600px] lg:font-light mt-2
     items-center md:px-16 md:text-[12.5px] lg:ml-0 lg:text-left lg:px-0  lg:text-xs lg:text-white'>Famtech is reimagining farming for a connected world—bringing innovative digital solutions to fields, markets, and communities everywhere.</p>
    <div className="flex space-x-4 m-auto lg:ml-0 mt-6  items-center">
            <button
            className='bg-green-600 text-sm text-white justify-center text-center px-2 py-2 w-34 md:w-40 lg:w-44 lg:h-10 rounded-lg font-medium flex items-center'
            >Book a Demo <FaAngleRight size={20} className='p-1 ml-2  rounded-full bg-white text-black'/></button>
            <button className='bg-white text-sm text-black-500 justify-center text-center px-2 py-2 w-34 md:w-40 lg:w-44 lg:h-10 rounded-lg font-medium flex items-center'>Dashboard</button>
        </div>
        </div>
        {isOnHome && ( 
        <div className="hidden lg:grid col-start-3 row-start-3 row-end-5 ">
        <FarmOverviewCard
        soilMoisture={72}
        tasksCompleted={64}
        weatherTemp="18-22°"
        cornValue="6.14"
        cornTrend="down"
        soybeansValue="6.14"
        soybeansTrend="up"
        />
        </div>
        )
      }

    </main>
  )
}

export default Home