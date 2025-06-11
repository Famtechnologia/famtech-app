// src/components/TeamMemberDetailsPopup.tsx
'use client';

import React from 'react';
import { TeamMember } from '@/components/section/TeamMemberCard'; // Adjust path if necessary

interface TeamMemberDetailsPopupProps {
  member: TeamMember;
  onClose: () => void;
  isOpen: boolean; // Prop to control open/close state for animation
}

const TeamMemberDetailsPopup: React.FC<TeamMemberDetailsPopupProps> = ({ member, onClose, isOpen }) => {
  

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={onClose}
        ></div>
      )}

      {/* Popup Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full sm:w-[350px] lg:w-[400px] 
          bg-white shadow-lg p-6 flex flex-col 
          transform transition-transform duration-300 ease-in-out
          z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light"
          aria-label="Close popup"
        >
          &times;
        </button>
        
        {/* Member Details */}
        <div className="flex flex-col items-center text-center mt-8 overflow-y-auto custom-scrollbar"> {/* Added custom-scrollbar class */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-green-500">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = 'https://placehold.co/128x128/cccccc/333333?text=User'; 
                e.currentTarget.onerror = null;
              }}
            />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
          <p className="text-md font-semibold text-green-600 mb-2">{member.title}</p>
          
          {/* Display the fuller description here */}
          <p className="text-sm text-gray-700 mb-3 leading-relaxed text-left max-h-64 overflow-y-auto pr-2">
            {member.fullDescription}
          </p>
          

        </div>
      </div>
    </>
  );
};

export default TeamMemberDetailsPopup;