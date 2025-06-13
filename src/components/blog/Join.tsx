'use client'
import React, { useState } from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from 'next/image'
const Join: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage('');
    setIsLoading(true);

    if (!email || !email.includes('@') || !email.includes('.')) {
      setMessage('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      // Placeholder for your actual API call.
      // Replace with a real fetch request to your subscription API endpoint.
      const response = await new Promise(resolve => setTimeout(() => {
        // Simulate a successful response
        resolve({ ok: true, json: () => Promise.resolve({ message: 'Subscription successful!' }) });
      }, 1500));

      if ((response as Response).ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        const errorData = await (response as Response).json();
        setMessage(errorData.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="
        relative
        flex flex-col items-center justify-center
        space-y-4 text-white
        my-10 lg:my-30
        h-96 md:h-80 lg:h-96
        px-6 py-10
        md:mx-20
        md:rounded-xl lg:py-16
        lg:mx-28
      "
    >
     <Image
      src='/images/blog/strawberry-field.jpg'
      alt='background'
      fill
      priority
      className='object-cover z-0'

     />

    
      <div className="absolute inset-0 bg-black opacity-50 h-full md:rounded-lg"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
        <h2 className='font-bold text-2xl lg:text-5xl'>Stay Ahead</h2>
        <p className='font-light text-lg lg:text-xl md:max-w-[500px] lg:max-w-[700px]'>
          subscribe now for the latest updates and insights.
        </p>

        <form onSubmit={handleSubmit} className='flex flex-row lg:flex-row lg:space-x-4 space-x-2 lg:space-y-0
                     items-center justify-center mt-6 md:mt-4 w-full max-w-lg'>
          <input
            type="email"
            placeholder='Enter your email..'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className='flex-grow py-2 px-4 bg-white text-gray-800 
            placeholder-gray-500 rounded-lg focus:outline-none 
            focus:ring-1 focus:ring-green-500 w-full lg:w-auto'
          />
          <button
            type="submit"
            disabled={isLoading}
            className='
              flex items-center justify-center
              rounded-lg
              font-light w-12 h-10
              bg-green-600 hover:bg-green-700 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
            '
          >
            <MdKeyboardDoubleArrowRight size={24} className='text-white p-0' />
          </button>
        </form>

        {message && (
          <p className={`text-center text-sm mt-2 ${message.includes('Thank you') ? 'text-green-300' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default Join