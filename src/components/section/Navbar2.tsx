'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdArrowDropDown } from "react-icons/md";
<meta name="description" content="Put your description here."></meta>

const BarsIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
  </svg>
);

const TimesIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

const ArrowDropDownIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31l-3.22 3.22a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clipRule="evenodd" />
  </svg>
);

const ArrowRightCircleIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.007-.47a.75.75 0 0 0-.012-1.056l-3.75-3.75a.75.75 0 1 0-1.06 1.06l2.47 2.47H8.25a.75.75 0 0 0 0 1.5h5.586l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3.75-3.75a.75.75 0 0 0 .012-1.056Z" clipRule="evenodd" />
  </svg>
);


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/' || pathname === '/home';

  const isTransparentState = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); 
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true); 
    }

    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage]);

  const navbarBgClass = isTransparentState ? 'bg-transparent' : 'bg-white shadow-sm';
  
  const desktopNavLinkBaseColor = isTransparentState ? 'text-black' : 'text-gray-700';
  const navLinkHoverActiveColor = 'text-green-600'; 

  const mobileMenuBgColor = isTransparentState ? 'bg-white bg-opacity-80' : 'bg-white shadow-lg'; 
  const mobileNavLinkColor = isTransparentState ? 'text-gray-600' : 'text-gray-800'; 

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const getNavLinkClasses = (path: string) =>
    `relative transition-colors duration-200 
      ${pathname === path ? `${navLinkHoverActiveColor} font-bold` : desktopNavLinkBaseColor} 
      hover:${navLinkHoverActiveColor}`;

  const getMobileNavLinkClasses = (path: string) =>
    `block w-full text-center py-3 px-4 text-base font-semibold transition-colors duration-200 
      ${pathname === path ? 'bg-green-100 text-green-700' : `${mobileNavLinkColor} hover:bg-gray-100`}`;

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full h-18 md:h-22 pt-2 md:pt-0 items-center justify-center lg:h-23 ${navbarBgClass} transition-all duration-300`}>
      
      <div
        className="
          mx-auto 
          flex h-14 items-center justify-between
          px-4 py-2  
          sm:h-20 sm:px-4 sm:py-3
          md:h-24 md:px-8 md:py-4
          lg:px-16
        "
      >
        <Link href="/">
          <div className="flex-shrink-0">
            
            {isTransparentState ? (

              <Image
                src="/famtech-white-logo.png" 
                alt="FAMTECH Smart Farming logo - White"
                width={1600} 
                height={1600} 
                className="h-[150px] w-[150px] loading-lazy fetchpriority-high" 
              />
            ) : (
              
              <Image
                src="/famtech-smart-farming-logoss.png"
                alt="FAMTECH Smart Farming logo"
                width={1600} 
                height={1600} 
                className="h-[150px] w-[150px]" 
              />
            )}
          </div>
        </Link>

        <div className="hidden items-center lg:flex lg:space-x-24">
          <ul className="flex items-center text-sm md:text-base space-x-8">
            <li>
              <Link href="/" 
              className={ getNavLinkClasses('/') } 
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/about"
                className={ getNavLinkClasses('/about') }> 
                About
              </Link>
            </li>
            <li>
              <Link href="/blog"
                className={ getNavLinkClasses('/blog') }> 
                
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact"
                className={ `flex items-center ${getNavLinkClasses('/contact')}`}> 
                Contact Us
                <MdArrowDropDown className="ml-1 w-6 h-6" />
              </Link>
            </li>
          </ul>

          <div
            className={`
              flex items-center justify-center
              rounded-full border border-solid
              p-2
              transition-colors duration-200
              md:px-4 md:py-2
              ${isTransparentState
                ? 'border-green-700 text-black hover:bg-white hover:text-green-700 border-2' 
                : 'border-green-700 text-gray-700 hover:bg-green-800 hover:text-white'}
            `}
          >
         <a
     href="mailto:famtechnologia@gmail.com"
     className="flex items-center text-sm" 
     aria-label="Request a demo via email"
>
  Request A Demo{' '}
  <ArrowRightCircleIconSVG 
    className={`ml-2 w-5 h-5 
      ${isTransparentState ? 'text-green-600' : 'text-green-600 hover:text-white'}`} 
  />
</a>
          </div>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            onClick={handleToggleMenu}
            className="rounded-md p-1 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            aria-label='menu-button'
          >
            {isMobileMenuOpen ? (
              <TimesIconSVG className="h-7 w-7 text-black" />
            ) : (
              <BarsIconSVG className="h-7 w-7 text-black" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className={`
            absolute left-0 top-16
            flex h-screen w-full flex-col items-center pt-8
            space-y-8
            ${mobileMenuBgColor}
            text-base font-semibold
          `}
        >
          <Link
            href="/"
            className={ getMobileNavLinkClasses('/') } 
            onClick={handleToggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={ getMobileNavLinkClasses('/about') } 
            onClick={handleToggleMenu}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={getMobileNavLinkClasses('/blog')}
            onClick={handleToggleMenu}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className={ `flex flex-row items-center justify-center ${getMobileNavLinkClasses('/contact')} `} 
            onClick={handleToggleMenu}
          >
            Contact Us
            <MdArrowDropDown className="ml-1 w-6 h-6" />
          </Link>
          <button
            className={`
              mt-2 rounded-full bg-green-700 px-6 py-3
              transition-colors duration-200 border-1 border-green-600
              hover:bg-green-800 text-white flex items-center text-sm
            `}
            onClick={handleToggleMenu}
          >
            Request A Demo <ArrowRightCircleIconSVG className="ml-2 w-6 h-6" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;