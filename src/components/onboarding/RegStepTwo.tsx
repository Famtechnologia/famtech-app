'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

const RegStepTwo = () => {
  const [farmType, setFarmType] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [farmUnit, setFarmUnit] = useState('Hectares');
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ farmType, farmSize, farmUnit, interests });
    // Submit or navigate
  };

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto px-4 py-10 min-h-screen bg-white">
      {/* Logo */}
      <Image
        src="/images/onboarding/Logo 1.jpg"
        width={150}
        height={150}
        alt="FAMTECH Logo"
        
      />

      {/* Title */}
      <h3 className="text-xl font-bold self-start text-center mb-1">Farmer Setup</h3>
      <p className="text-gray-500 self-start text-sm mb-6">Step 2 of 2</p>

      {/* Progress Bar */}
      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
        <div className="h-full bg-green-600 w-2/3" />
      </div>

      {/* Form */}
      <form onSubmit={handleContinue} className="w-full max-w-md space-y-6">
        {/* Farm Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Farm Type</label>
          <div className="relative">
            <select
              value={farmType}
              onChange={(e) => setFarmType(e.target.value)}
              className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm transition"
            >
              <option value="">Select Farm type</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              <FiChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Farm Size */}
        <div>
          <label className="block text-sm font-medium mb-1">Farm Size</label>
          <div className="flex">
            <input
              type="text"
              value={farmSize}
              onChange={(e) => setFarmSize(e.target.value)}
              placeholder="Enter farm size"
              className="w-2/3 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
            <div className="relative w-1/3">
              <select
                value={farmUnit}
                onChange={(e) => setFarmUnit(e.target.value)}
                className="w-full appearance-none border border-gray-300 rounded-r-lg px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm transition"
              >
                <option value="Hectares">Hectares</option>
                <option value="Acres">Acres</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <FiChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Specify Interests */}
        <div>
          <h4 className="text-base font-medium mb-1">Specify</h4>
          <p className="text-gray-500 text-sm mb-2">Select services you're interested in</p>
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {[
              'Poultry',
              'Cattle',
              'Maize',
              'Yam Farming',
              'Crop Insurance',
              'Transport Services',
            ].map((item) => (
              <label
                key={item}
                className={`flex items-center text-sm md:text-base gap-2 border rounded-lg px-4 py-3 cursor-pointer transition-all ${
                  interests.includes(item)
                    ? 'bg-green-100 border-green-600 text-green-700'
                    : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
                }`}
              >
                <input
                  type="checkbox"
                  value={item}
                  checked={interests.includes(item)}
                  onChange={() => toggleInterest(item)}
                  className="accent-green-600"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className={`w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-full transition duration-200 ${
            !farmType || !farmSize ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!farmType || !farmSize}
        >
          Continue
        </button>
      </form>

      {/* Custom dropdown styles via global Tailwind override or module (optional) */}
      <style jsx global>{`
        select option:hover {
          background-color: #d1fae5; /* green-100 */
        }
      `}</style>
    </div>
  );
};

export default RegStepTwo;
