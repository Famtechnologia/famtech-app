'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const FamTechLoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        setMessage({ type: 'success', text: 'Login successful!' });
        
      } else {
        setMessage({ type: 'error', text: 'Invalid email or password.' });
      }
      setLoading(false);
    }, 1500);
  };

 
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-inter lg:mx-24 lg:max-w-7xl xl:mx-auto">
      {/* Left Section - Image */}
      <div className="relative hidden lg:flex w-full  lg:w-1/2 bg-none  items-center justify-center p-28 lg:p-12 ">
        <Image
          src='/images/authlogin/Exclude.png'
          alt="Onboarding Illustration"
          width={629}
          height={794}
          className="max-w-full h-full lg:h-auto object-cover rounded-xl "
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/2d3748/cbd5e0?text=Illustration'; e.currentTarget.onerror = null; }}
        />
        
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full  lg:w-1/2 flex  items-center justify-center p-2 sm:p-8 bg-white">
        <div className="w-full max-w-sm md:max-w-lg bg-white rounded-xl mx-4 mt-8 shadow-2xl p-6 md:p-12 lg:p-6 space-y-6 transform transition-all duration-300 hover:shadow-lg">
          <div className="text-center">
            <Image
            src='/images/authlogin/logo.jpg'
          alt="Onboarding Illustration"
          width={1600}
          height={1600}
          className="w-30 h-30 md:w-40 md:h-40 lg:w-30 lg:h-30 items-center mx-auto object-cover"
            />
            <p className="text-black font-semibold text-lg md:text-xl md:mb-9 md:-mt-6">Sign in to your account</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">Email address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-gray-600 placeholder-gray-400 text-sm focus:ring-blue-500 focus:border-green-500 outline-none transition-all duration-200"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-gray-500 placeholder-gray-400 focus:ring-blue-500 focus:border-green-500 outline-none transition-all duration-200"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="flex items-center justify-end text-sm">
              <a href="#" className="font-medium text-blue-400 hover:text-blue-600 hover:underline transition-colors duration-200">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {message && (
            <div className={`text-center text-sm font-medium p-2 rounded-md ${
              message.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
            }`}>
              {message.text}
            </div>
          )}

        

          <div className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{' '}
            <a href="/auth/register" className="font-medium text-blue-400 hover:text-blue-600 hover:underline transition-colors duration-200">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamTechLoginPage;