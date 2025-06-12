// components/CongratulationsPage.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CongratulationsPage: React.FC = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <Link href="/">
          <Image
            src="/images/home/famtech-logo-two.png"
            alt="FAMTECH Logo"
            width={1600}
            height={1600}
            className=" w-48 h-48 -mt-20 md:-mt-16"
          />
        </Link>
      </div>

      <div className="bg-white rounded-xl mt-20  p-8 sm:p-12 md:p-16 text-center max-w-xl mx-auto z-0">
        <div className="mb-6">
          <span role="img" aria-label="party popper" className="text-6xl sm:text-7xl">🎉</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-green-700 mb-4">
          Congratulations!
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
          You have been added to the waitlist.
        </p>



        <div className="flex flex-col space-y-4">
          <Link href="/" passHref>
            <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200">
              Go to Homepage
            </button>
          </Link>
          <Link href="/blog" passHref>
            <button className="w-full px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold text-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200">
              Explore Our Blog
            </button>
          </Link>
        </div>
      </div>

      <footer className="mt-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FAMTECH. All rights reserved.
      </footer>
    </div>
  );
};

export default CongratulationsPage;