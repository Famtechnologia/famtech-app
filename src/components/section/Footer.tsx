import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp  } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from 'next/link';




const Footer:React.FC = () => {
  return (
    <div className='px-4 py-6 bg-green-50 rounded-lg mt-10 md:mt-15
    md:flex md:flex-col md:space-y-4  lg:px-16  '>
        <div className='md:flex md:flex-col lg:flex-row lg:items-start lg:justify-between 
        lg:space-x-8 lg:mx-0 md:space-y-4 md:justify-between md:justify-center'>
        <div className='md:flex flex-col md:max-w-[400px] lg:max-w-[350px] '>
        <div className="flex-shrink-0">
                   <Image
                        src="/famtech-smart-farming-logoss.png"
                        alt="FAMTECH Smart Farming logo, symbolizing agricultural technology and growth"
                        width={1600} 
                        height={1600} 
                        className="w-[120px] h-[120px] px-0 py-0 " 
                    />
                </div>
                <p className='text-sm text-left text-black mb-4 md:text-base'>Empowering farmers, agribusinesses, and governments
                 with intelligent tools to transform agricultural productivity, profitability, and sustainability.</p>
        </div>
        <section className='inline-flex flex-col space-y-4 mb-12 md:mb-4 lg:mb-0
        md:flex md:flex-row md:justify-between lg:flex-row lg:justify-between lg:mt-16'>
            
            <div className='md:w-1/3'>
                <h3 className='text-sm text-gray-500 mb-2 '>COMPANY</h3>
                <ul className='inline-flex flex-col space-y-2'>
                <li className='text-sm'><Link href="#" className='cursor-pointer'>Book a Demo</Link></li>
                <li className='text-sm'><Link href="/about" className='cursor-pointer'>About us</Link></li>
                <li className='text-sm'><Link href="/terms" className='cursor-pointer'>Terms and Conditions</Link></li>
                <li className='text-sm'><Link href="/privacy" className='cursor-pointer'>Privacy Policy</Link></li>
                </ul>
                
            </div>
            <div className='md:w-1/3'>
                <h3 className='text-sm text-gray-500 mb-2'>SERVICE</h3>
                <ul className='inline-flex flex-col space-y-2'>
                <li className='text-sm'><Link href="#"className='cursor-pointer'>FarmOS</Link></li>
                <li className='text-sm'><Link href="#" className='cursor-pointer'>SmartFarm</Link></li>
                <li className='text-sm'><Link href="#" className='cursor-pointer'>AgriTrade</Link></li>
                </ul>
            </div>
            <div className='md:w-1/3'>
                <ul className='inline-flex flex-col space-y-2'>
                <h3 className='text-sm text-gray-500 mb-2'>CONTACT</h3>
                <p className='text-sm'>+2349127483717</p>
                <p className='text-sm'>famtechnologia@gmail.com</p>
                <p className='text-sm'>16, Wisdom Estate, Akobo, Ibadan, Oyo State, Nigeria</p>
            </ul>
            </div>
        </section>
        </div>
        <div className='inline-flex flex-col space-y-4'>
            <ul className='inline-flex md:hidden space-x-4  justify-end start-end'>
                <li><a href="https://www.linkedin.com/company/famtechnologia/"><FaLinkedin/></a></li>
                <li><a href="https://www.instagram.com/_famtech?igsh=dHN5cnI4ZjR6aXAy"><FaInstagram/></a></li>
                <li><a href="Info@famtechnologia.com"><CgMail/></a></li>
                <li><a href="https://wa.me/2349127483717"><FaWhatsapp /></a></li>
                <li><a href="https://www.facebook.com/share/1AnR1tyTV4/"><FaFacebook/></a></li>
                <li><a href="#"><FaTiktok /></a></li>
            </ul>
            <hr className='text-gray-300' />
            <div className='md:flex md:flex-row md:justify-between md:items-center  mt-4'>
            <p className='text-sm text-gray-400'>@FAMTECH 2025. ALL OPERATION  MONITORED, ALL RIGHT RESERVED</p>
             <ul className='hidden md:flex space-x-4'>
                <li><a href="https://www.linkedin.com/company/famtechnologia/"><FaLinkedin/></a></li>
                <li><a href="https://www.instagram.com/_famtech?igsh=dHN5cnI4ZjR6aXAy"><FaInstagram/></a></li>
                <li><a href="Info@famtechnologia.com"><CgMail/></a></li>
                <li><a href="https://wa.me/2349127483717"><FaWhatsapp /></a></li>
                <li><a href="https://www.facebook.com/share/1AnR1tyTV4/"><FaFacebook/></a></li>
                <li><a href="#"><FaTiktok/></a></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer