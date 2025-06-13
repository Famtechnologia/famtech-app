'use client';

import React from 'react';
import Image from 'next/image';

import { TeamMember } from '@/components/section/TeamMemberCard'; 

interface TeamMemberDetailsPopupProps {
  member: TeamMember;
  onClose: () => void;
  isOpen: boolean; 
}

const TeamMemberDetailsPopup: React.FC<TeamMemberDetailsPopupProps> = ({ member, onClose, isOpen }) => {
  
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay: Fixed, covers entire screen, semi-transparent black, BELOW popup */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300" 
        onClick={onClose} 
      ></div>

      {/* Popup Panel: Fixed, centered, responsive, ABOVE overlay */}
      <div
        className={`
          fixed             
          inset-0           
          m-auto            
          w-[90vw]          
          max-w-lg          
          h-auto            
          max-h-[90vh]      
          bg-white          
          shadow-xl         
          rounded-lg        
          p-3  md:p-6             
          flex flex-col     
          z-[999]           /* Still ensuring highest Z-index for the main popup */
transform           
transition-all duration-300 ease-in-out 
${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} 
 overflow-hidden   
 `}
 >
 {/* Close Button */}
 <button
 onClick={onClose}
className="absolute top-4 right-0 lg:top-4 lg:right-4 text-gray-500 hover:text-gray-800 text-3xl font-light z-10"
aria-label="Close popup"
 >
 &times;
 </button>
        
        {/* Member Details Content Area */}
        <div className="flex flex-col items-center text-center lg:px-4 mt-8 px-0 py-2 overflow-y-auto custom-scrollbar flex-grow"> 
          
          
          <h3 className="text-2xl font-bold text-gray-800 mb-0 lg:mb-1">{member.name}</h3>
          <p className="text-md font-semibold text-green-600 mb-0 lg:mb-2">{member.title}</p>
          
          <p className="text-sm text-gray-700 mb-3 leading-relaxed text-left">
            {member.fullDescription}
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMemberDetailsPopup;