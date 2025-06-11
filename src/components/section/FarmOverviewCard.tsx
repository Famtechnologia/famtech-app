
'use client'; 

import React from 'react';
import { WiHumidity, WiCloudy } from 'react-icons/wi'; 
import { MdOutlineChecklist } from 'react-icons/md'; 
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; 


interface ProgressBarProps {
  percentage: number;
  color?: string; 
  thumbColor?: string; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, color = 'bg-green-500', thumbColor = 'bg-white' }) => {
  return (
    <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gray-600">
      <div
        className={`${color} h-full rounded-full transition-all duration-300 ease-out`}
        style={{ width: `${percentage}%` }}
      ></div>
      {/* Thumb Indicator */}
      <div
        className={`absolute top-1/2 h-4 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${thumbColor} shadow`}
        style={{ left: `${percentage}%` }}
      ></div>
    </div>
  );
};

interface FarmOverviewCardProps {
  soilMoisture: number; // Percentage
  tasksCompleted: number; // Percentage
  weatherTemp: string; // e.g., "18-22°"
  cornValue: string; // e.g., "6.14"
  cornTrend: 'up' | 'down';
  soybeansValue: string; // e.g., "6.14"
  soybeansTrend: 'up' | 'down';
}

const FarmOverviewCard: React.FC<FarmOverviewCardProps> = ({
  soilMoisture,
  tasksCompleted,
  weatherTemp,
  cornValue,
  cornTrend,
  soybeansValue,
  soybeansTrend,
}) => {
  return (
    <div
      className="
        relative max-w-7xl mx-auto
        flex  max-w-sm flex-col space-y-3 rounded-xl p-4
        bg-transparent bg-opacity-80 
        backdrop-blur-md     
        text-white shadow-md mr-0 mb-0
      "
      >
      <h2 className="text-xl font-semibold">Farm overview</h2>

      {/* Soil Moisture */}
      <div className="flex flex-col items-start space-y-1">
        <div className="flex items-center text-sm font-medium">
          <WiHumidity size={24} className="mr-2" /> Soil moisture
        </div>
        <div className="flex w-full items-center space-x-2">
          <ProgressBar percentage={soilMoisture} />
          <span className="text-sm">{soilMoisture}%</span>
        </div>
      </div>

      {/* Task Progress */}
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center text-sm font-medium">
          <MdOutlineChecklist size={24} className="mr-2" /> Task
        </div>
        <div className="flex w-full items-center space-x-3">
          <ProgressBar percentage={tasksCompleted} />
          <span className="text-sm">{tasksCompleted}%</span>
        </div>
      </div>

      {/* Bottom Row Cards */}
      <div className="flex justify-between space-x-2">
        {/* Weather Card */}
        <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-green-700 px-4 py-2 shadow-md">
          <WiCloudy size={32} className="mb-1 text-white" />
          <span className="text-xs text-white">Weather</span>
          <span className="text-xs font-semibold text-white">{weatherTemp}</span>
        </div>

        {/* Corn Card */}
        <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-gray-600 px-4 py-2 shadow-md">
          <span className="text-xs text-white">Corn</span>
          <div className="flex items-center text-xs font-bold text-white">
            {cornValue}{' '}
            {cornTrend === 'up' ? (
              <FaArrowUp size={16} className="ml-1 text-green-400" />
            ) : (
              <FaArrowDown size={16} className="ml-1 text-red-400" />
            )}
          </div>
        </div>

        {/* Soybeans Card */}
        <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-gray-600 px-4 py-2 shadow-md">
          <span className="text-xs text-white">Soybeans</span>
          <div className="flex items-center text-xs font-bold text-white">
            {soybeansValue}{' '}
            {soybeansTrend === 'up' ? (
              <FaArrowUp size={16} className="ml-1 text-green-400" />
            ) : (
              <FaArrowDown size={16} className="ml-1 text-red-400" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmOverviewCard;

