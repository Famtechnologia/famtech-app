'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BarsIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={props.className}
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const TimesIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={props.className}
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ArrowRightIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={props.className}
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
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
      setIsScrolled(scrollPosition > 50);
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

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const getNavLinkClasses = (path: string) => {
    const isActive = pathname === path;
    return `
      relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-out
      ${isTransparentState 
        ? isActive 
          ? 'text-white' 
          : 'text-white/80 hover:text-white'
        : isActive 
          ? 'text-emerald-600' 
          : 'text-gray-700 hover:text-emerald-600'
      }
      ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-emerald-500 after:transform after:scale-x-100' : 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-emerald-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'}
    `;
  };

  const getMobileNavLinkClasses = (path: string) => {
    const isActive = pathname === path;
    return `
      block px-6 py-3 text-base font-medium transition-all duration-200
      ${isActive 
        ? 'text-emerald-600 bg-emerald-50 border-r-4 border-emerald-600' 
        : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
      }
    `;
  };

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${isTransparentState 
          ? 'bg-transparent backdrop-blur-0' 
          : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-100'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <div className="relative">
                {isTransparentState ? (
                  <div className='h-24 w-24 lg:h-40 lg:w-40'>
                    <Image
                      src="/images/home/famtech-white-logo.png"
                      alt="FAMTECH Smart Farming logo - White"
                      width={700}
                      height={700}
                      priority
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className='h-24 w-24 lg:h-40 lg:w-40'>
                  <Image
                    src="/images/home/famtech-logo-two.png"
                    alt="FAMTECH Smart Farming logo"
                    width={700}
                    height={700}
                    priority
                    className="object-cover w-full h-full"
                  />
                   </div>
                )}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <nav className="flex items-center space-x-1">
                <Link href="/" className={getNavLinkClasses('/')}>
                  Home
                </Link>
                <Link href="/about" className={getNavLinkClasses('/about')}>
                  About
                </Link>
                <Link href="/blog" className={getNavLinkClasses('/blog')}>
                  Blog
                </Link>
                <Link href="/contact" className={getNavLinkClasses('/contact')}>
                  Contact
                </Link>
              </nav>

              {/* CTA Button */}
              <a
                href="mailto:famtechnologia@gmail.com"
                className={`
                  group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold
                  rounded-full transition-all duration-300 ease-out transform hover:scale-105
                  ${isTransparentState
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/25'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/25'
                  }
                `}
                aria-label="Request a demo via email"
              >
                <span>Request Demo</span>
                <ArrowRightIconSVG className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleToggleMenu}
              className={`
                lg:hidden relative p-2 rounded-lg transition-all duration-300
                ${isTransparentState 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6">
                <BarsIconSVG 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
                  }`} 
                />
                <TimesIconSVG 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden transition-all duration-300 ease-out
          ${isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
          }
        `}>
          <div className="bg-white shadow-xl border-t border-gray-100">
            <div className="px-4 py-6 space-y-2">
              <Link
                href="/"
                className={getMobileNavLinkClasses('/')}
                onClick={handleToggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={getMobileNavLinkClasses('/about')}
                onClick={handleToggleMenu}
              >
                About
              </Link>
              <Link
                href="/blog"
                className={getMobileNavLinkClasses('/blog')}
                onClick={handleToggleMenu}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={getMobileNavLinkClasses('/contact')}
                onClick={handleToggleMenu}
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="mailto:famtechnologia@gmail.com"
                  className="
                    flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold
                    bg-emerald-600 text-white rounded-lg transition-all duration-300
                    hover:bg-emerald-700 transform hover:scale-105 shadow-lg shadow-emerald-600/25
                  "
                  onClick={handleToggleMenu}
                  aria-label="Request a demo via email"
                >
                  <span>Request Demo</span>
                  <ArrowRightIconSVG className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={handleToggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;