import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp  } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='relative overflow-hidden mt-20'>
      {/* Background with gradient and subtle pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent)] opacity-60'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent)]'></div>
      </div>
      
      <div className='relative z-10 px-6 py-16 lg:px-20'>
        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto'>
          {/* Top Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16'>
            {/* Brand Section */}
            <div className='space-y-6'>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src="/images/home/famtech-logo-two.png"
                    alt="FAMTECH Smart Farming logo, symbolizing agricultural technology and growth"
                    width={80} 
                    height={80} 
                    priority
                    className="relative w-20 h-20 rounded-2xl shadow-2xl" 
                  />
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-white tracking-tight'>FAMTECH</h2>
                  <p className='text-emerald-400 text-sm font-medium'>Smart Farming Solutions</p>
                </div>
              </div>
              
              <p className='text-slate-300 leading-relaxed max-w-md text-base'>
                Empowering farmers, agribusinesses, and governments with intelligent tools to transform 
                agricultural productivity, profitability, and sustainability.
              </p>
              
              {/* Social Media Icons */}
              <div className='flex items-center space-x-4'>
                <span className='text-slate-400 text-sm font-medium'>Follow us:</span>
                <div className='flex space-x-3'>
                  {[
                    { icon: FaLinkedin, href: "https://www.linkedin.com/company/famtechnologia/", label: "LinkedIn" },
                    { icon: FaInstagram, href: "https://www.instagram.com/_famtech?igsh=dHN5cnI4ZjR6aXAy", label: "Instagram" },
                    { icon: CgMail, href: "mailto:famtechnologia@gmail.com", label: "Email" },
                    { icon: FaWhatsapp, href: "https://wa.me/2349127483717", label: "WhatsApp" },
                    { icon: FaFacebook, href: "https://www.facebook.com/share/1AnR1tyTV4/", label: "Facebook" },
                    { icon: FaTiktok, href: "https://www.tiktok.com/@_famtech?_t=ZM-8x5LEUoa1Ru&_r=1", label: "TikTok" }
                  ].map(({ icon: Icon, href, label }) => (
                    <a 
                      key={label}
                      href={href} 
                      aria-label={label}
                      className='group relative p-2 rounded-xl bg-slate-800/50 hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25'
                    >
                      <Icon className='w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300' />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Links Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
              {/* Company Links */}
              <div className='space-y-4'>
                <h3 className='text-white font-semibold text-sm uppercase tracking-wider relative'>
                  Company
                  <div className='absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-500 rounded-full'></div>
                </h3>
                <ul className='space-y-3'>
                  {[
                    { name: 'Book a Demo', href: '#' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Terms & Conditions', href: '/terms' },
                    { name: 'Privacy Policy', href: '/privacy' }
                  ].map(({ name, href }) => (
                    <li key={name}>
                      <Link 
                        href={href} 
                        className='text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm relative group'
                        aria-label={name}
                      >
                        {name}
                        <span className='absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full'></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Services Links */}
              <div className='space-y-4'>
                <h3 className='text-white font-semibold text-sm uppercase tracking-wider relative'>
                  Services
                  <div className='absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-500 rounded-full'></div>
                </h3>
                <ul className='space-y-3'>
                  {[
                    { name: 'FarmOS', href: '#' },
                    { name: 'SmartFarm', href: '#' },
                    { name: 'AgriTrade', href: '#' }
                  ].map(({ name, href }) => (
                    <li key={name}>
                      <Link 
                        href={href} 
                        className='text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm relative group'
                        aria-label={name}
                      >
                        {name}
                        <span className='absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full'></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className='space-y-4'>
                <h3 className='text-white font-semibold text-sm uppercase tracking-wider relative'>
                  Contact
                  <div className='absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-500 rounded-full'></div>
                </h3>
                <div className='space-y-3'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-1 h-1 bg-emerald-400 rounded-full mt-2 flex-shrink-0'></div>
                    <p className='text-slate-300 text-sm leading-relaxed'>+2349127483717</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-1 h-1 bg-emerald-400 rounded-full mt-2 flex-shrink-0'></div>
                    <p className='text-slate-300 text-sm leading-relaxed'>famtechnologia@gmail.com</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-1 h-1 bg-emerald-400 rounded-full mt-2 flex-shrink-0'></div>
                    <p className='text-slate-300 text-sm leading-relaxed'>
                      16, Wisdom Estate, Akobo, Ibadan, Oyo State, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className='relative mb-8'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-slate-700'></div>
            </div>
            <div className='relative flex justify-center'>
              <div className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6'>
                <div className='w-2 h-2 bg-emerald-500 rounded-full'></div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
            <p className='text-slate-400 text-sm'>
              © FAMTECH 2025. All operations monitored, all rights reserved.
            </p>
            
            {/* CTA Button */}
            <div className='flex items-center space-x-4'>
              <Link 
                href="#" 
                className='group relative px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25'
                aria-label='Get started with FAMTECH'
              >
                Get Started
                <div className='absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer