import React from 'react';
import Image from 'next/image';
import { FiUser } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi"; // Check icon

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center max-w-md bg-white self-center mx-auto justify-center bg-green-50 px-4">
      {/* Check Icon */}
      <div className="bg-green-100 p-6 rounded-full mb-6">
        <FiCheckCircle className="text-green-600" size={48} />
      </div>

      {/* Welcome Message */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Welcome, John!
      </h2>
      <p className="text-gray-500 mb-8 text-sm">
        Your Famtech account is ready to use
      </p>

      {/* Dashboard Info Box */}
      <div className="bg-green-70 border border-green-100 rounded-lg p-6 w-full max-w-md shadow-xs mb-8">
        <div className="flex items-center gap-2 mb-4">
          <FiUser size={20} className="text-green-600 " />
          <h3 className="font-semibold text-gray-800">Farmer Dashboard</h3>
        </div>

        <ul className="text-gray-700 space-y-2 pl-1">
          <li className="flex items-center gap-2">
            <GoDotFill className="text-green-600" />
            Market prices for your crops
          </li>
          <li className="flex items-center gap-2">
            <GoDotFill className="text-green-600" />
            Connect with buyers directly
          </li>
          <li className="flex items-center gap-2">
            <GoDotFill className="text-green-600" />
            Weather forecasts and alerts
          </li>
          <li className="flex items-center gap-2">
            <GoDotFill className="text-green-600" />
            Farming tips and resources
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href="#"
        className="bg-green-600 hover:bg-green-700 text-white text-center font-medium
         px-8 py-3 rounded-full transition w-full"
      >
        Go to My Dashboard
      </a>
    </div>
  );
};

export default Success;
