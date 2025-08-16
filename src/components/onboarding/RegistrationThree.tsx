'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdCheckmark } from 'react-icons/io';

const plans = [
  {
    name: 'Basic Plan',
    price: '$0.00',
    features: [
      'Basic weather forecasts',
      'Limited crop management',
      'Access to Community forum',
      'Ad-supported dashboard',
    ],
    current: false,
  },
  {
    name: 'Premium Plan',
    price: '$50.00',
    features: [
      'Advanced weather prediction',
      'Unlimited crop & livestock tracking',
      'Real-time market price alerts',
      'Land mapping',
      'Ad-free experience',
      'Farm financial tracking tool',
      'Save up to 15% if billed annually',
    ],
    current: false,
  },
  {
    name: 'Enterprise Plan (Current Plan)',
    price: '$150.00',
    features: [
      'Advanced weather prediction',
      'Unlimited crop & livestock tracking',
      'Real-time market price alerts',
      'Land mapping',
      'Ad-free experience',
      'Farm financial tracking tool',
      'Save up to 15% if billed annually',
    ],
    current: true,
  },
];

const RegistrationThree = () => {
  const [selectedPlan, setSelectedPlan] = useState('Enterprise Plan (Current Plan)');

  return (
    <div className="flex flex-col items-center mx-auto max-w-lg mx-auto px-4 py-10 min-h-screen bg-white">
      {/* Logo */}
      <Image src="/images/onboarding/Logo 1.jpg" width={150} height={150} alt="logo"  />

      {/* Title */}
      <h3 className="text-xl font-bold mb-1 self-start text-center">Choose Subscription Tier</h3>
      <p className="text-sm text-gray-500 self-start text-center mb-8">Select a plan that works for you</p>
      <p className="text-gray-500 self-start text-sm mb-4">Step 3 of 3</p>
      {/* Progress Bar */}
      <div className="w-full max-w-xl h-2 bg-gray-200 rounded-full overflow-hidden mb-10">
        <div className="h-full bg-green-600 w-4/5" />
      </div>

      {/* Plan Selection */}
      <div className="w-full max-w-xl space-y-6">
        <h4 className="text-base font-semibold text-gray-700">Select Plan</h4>

        {plans.map((plan) => (
          <label
            key={plan.name}
            className={`block border-2 rounded-lg p-6 cursor-pointer transition-all ${
              selectedPlan === plan.name
                ? 'border-green-600 bg-green-50'
                : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="plan"
                  value={plan.name}
                  checked={selectedPlan === plan.name}
                  onChange={() => setSelectedPlan(plan.name)}
                  className="accent-green-600"
                />
                <span className="font-semibold text-gray-800">{plan.name}</span>
              </div>
              <div className="text-right">
                <p className="text-green-700 font-bold text-lg">{plan.price}</p>
                <p className="text-sm text-gray-500">/ month</p>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-gray-700">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IoMdCheckmark className="text-green-600 mt-1" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-4 mt-10 items-start justify-start self-start text-left ">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition"
          onClick={() => alert(`Plan saved: ${selectedPlan}`)}
        >
          Save Plan
        </button>
        <button
          className="border border-gray-300 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          onClick={() => alert('Cancelled')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RegistrationThree;
