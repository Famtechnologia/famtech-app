// src/components/sections/Navbar.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { BsArrowRightCircle } from 'react-icons/bs';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);


  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full h-20 shadow-sm bg-transparent">
      {/* Main Navbar Container */}
      <div
        className="
          mx-auto 
          flex h-16 items-center justify-between
          px-4 py-2
          sm:h-20 sm:px-6 sm:py-3
          md:h-24 md:px-8 md:py-4
          lg:px-16
        "
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/famtech-smart-farming-logoss.png"
            alt="FAMTECH Smart Farming logo, symbolizing agricultural technology and growth"
            width={200} 
            height={100} 
            className="h-auto w-40 md:w-48" 
          />
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden items-center lg:flex  lg:space-x-12">
          <ul className="flex items-center text-sm md:text-sm space-x-4 text-gray-700 ">
            <li>
              <a
                href="#"
                className="flex items-center text-sm md:text-sm  transition-colors duration-200 hover:text-green-600"
              >
                About
                <MdArrowDropDown size={24} className="ml-1" />
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors text-sm md:text-sm  duration-200 hover:text-green-600">
                Sustainability
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm md:text-sm  transition-colors duration-200 hover:text-green-600"
              >
                Product
                <MdArrowDropDown size={24} className="ml-1" />
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors text-sm md:text-sm  duration-200 hover:text-green-600">
                Connect
              </a>
            </li>
          </ul>

          {/* Request A Demo Button */}
          <div
            className="
              flex items-center justify-center
              rounded-full border border-solid border-green-700
              p-2 text-gray-700
              transition-colors duration-200
              hover:bg-green-500 hover:text-white
              md:px-4 md:py-2
            "
          >
            <button className="flex items-center text-sm ">
              Request A Demo{' '}
              <BsArrowRightCircle size={20} className="ml-2 text-green-600 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle Button (Hamburger icon) */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={handleToggleMenu}
            className="rounded-md p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6 text-gray-600" /> 
            ) : (
              <FaBars className="h-6 w-6 text-gray-600" /> 
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="
            absolute left-0 top-14
            flex h-screen w-full flex-col items-center pt-8 
            space-y-8 bg-gray-100 bg-opacity-95
            text-medium font-semibold text-gray-700
            sm:text-small sm:font-medium
          ">
        
          <a
            href="#"
            className="transition-colors text-sm md:text-sm  flex items-center duration-200 hover:text-green-600"
            onClick={handleToggleMenu}
          >
            About
            <MdArrowDropDown size={24} className="ml-1" />
          </a>
          <a
            href="#"
            className="transition-colors text-sm md:text-sm  duration-200 hover:text-green-600"
            onClick={handleToggleMenu}
          >
            Sustainability
          </a>
          <a
            href="#"
            className="transition-colors text-sm md:text-sm  flex items-center duration-200 hover:text-green-600"
            onClick={handleToggleMenu}
          >
            Product
            <MdArrowDropDown size={24} className="ml-1" />
          </a>
          <a
            href="#"
            className="transition-colors text-sm md:text-sm  duration-200 hover:text-green-600"
            onClick={handleToggleMenu}
          >
            Connect
          </a>
          <button
            className="
              mt-2 rounded-full bg-green-600 px-6 py-3 
               transition-colors duration-200 
              hover:bg-green-700 text-white flex items-center text-sm md:text-sm 
            "
            onClick={handleToggleMenu}
          >
            Request A Demo <BsArrowRightCircle size={24} className="ml-2" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;