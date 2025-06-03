import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { CgMail } from "react-icons/cg";





const Footer:React.FC = () => {
  return (
    <div className='px-4 py-6 bg-green-50 rounded-lg
    md:flex md:flex-col md:space-y-4  lg:px-16'>
        <div className='md:flex md:flex-col lg:flex-row lg:items-start lg:justify-between 
        lg:space-x-8 lg:mx-0 md:space-y-4 md:justify-between md:justify-center'>
        <div className='md:flex flex-col md:max-w-[400px] lg:max-w-[350px] '>
        <div className="flex-shrink-0">
                   <Image
                        src="/famtech-smart-farming-logoss.png"
                        alt="FAMTECH Smart Farming logo, symbolizing agricultural technology and growth"
                        width={200} 
                        height={100} 
                        className="h-28 w-20 md:w-48 lg:h-30" 
                    />
                </div>
                <p className='text-xs text-left text-black mb-4 font-light md:text-sm'>empowering farmers, agribusinesses, and governments
                 with intelligent tools to transform agricultural productivity, profitability, and sustainability.</p>
        </div>
        <section className='inline-flex flex-col space-y-4 mb-12 md:mb-4 lg:mb-0
        md:flex md:flex-row md:justify-between lg:flex-row lg:justify-between lg:mt-16'>
            
            <div className='md:w-1/3'>
                <h3 className='text-sm text-gray-500 mb-2 '>COMPANY</h3>
                <ul className='inline-flex flex-col space-y-2'>
                <li className='text-xs'><a href="#">Sustainablity</a></li>
                <li className='text-xs'><a href="#">About us</a></li>
                <li className='text-xs'><a href="#"></a>Book a Demo</li>
                <li className='text-xs'><a href="#"></a>Privacy Policy</li>
                </ul>
                
            </div>
            <div className='md:w-1/3'>
                <h3 className='text-sm text-gray-500 mb-2'>SERVICE</h3>
                <ul className='inline-flex flex-col space-y-2'>
                <li className='text-xs'><a href="#">FarmOS</a></li>
                <li className='text-xs'><a href="#">SmartFarm</a></li>
                <li className='text-xs'><a href="#">AgriTrade</a></li>
                </ul>
            </div>
            <div className='md:w-1/3'>
                <ul className='inline-flex flex-col space-y-2'>
                <h3 className='text-sm text-gray-500 mb-2'>CONTACT</h3>
                <p className='text-xs'>+2349127483717</p>
                <p className='text-xs'>famtechnologia@gmail.com</p>
                <p className='text-xs'>16, Wisdom Estate, Akobo, Ibadan, Oyo State, Nigeria</p>
            </ul>
            </div>
        </section>
        </div>
        <div className='inline-flex flex-col space-y-4'>
            <ul className='inline-flex md:hidden space-x-4  mr-0'>
                <li><a href="#"><FaLinkedin /></a></li>
                <li><a href="#"><FaInstagram/></a></li>
                <li><a href="#"><CgMail/></a></li>
                <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaTiktok/></a></li>
            </ul>
            <hr className='text-gray-300' />
            <div className='md:flex md:flex-row md:justify-between md:items-center  mt-4'>
            <p className='text-xs text-gray-400'>@FAMTECH 2025. ALL OPERATION  MONITORED, ALL RIGHT RESERVED</p>
             <ul className='hidden md:flex space-x-4'>
                <li><a href="#"><FaLinkedin /></a></li>
                <li><a href="#"><FaInstagram/></a></li>
                <li><a href="#"><CgMail/></a></li>
                <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaTiktok/></a></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer