// src/components/section/TeamMemberCard.tsx
'use client'; 

import React from 'react';

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string; // This is your short description/excerpt
  fullDescription: string; // Add this for the longer text
  
  imageUrl: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  isHighlighted?: boolean; 
  onViewProfile: (member: TeamMember) => void; 
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isHighlighted = false, onViewProfile }) => {
  
  return (
    <div
      className={`
        relative 
        bg-white 
        rounded-lg 
        shadow-lg 
        p-6 
        flex 
        flex-col 
        items-center 
        text-center 
        min-h-[22rem] 
        transition-all 
        duration-300 
        ease-in-out max-w-7xl mx-auto
        ${isHighlighted ? 'scale-102 shadow-xl' : 'hover:shadow-xl hover:scale-102 hover:ring-2 hover:ring-green-500 '} 
      `}
    >
      <div className="w-48 h-48 rounded-sm overflow-hidden mb-4">
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

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {member.name}
      </h3>

      <p className="text-sm font-semibold text-green-600 mb-3">
        {member.title}
      </p>

      <p className="text-sm text-gray-600 flex-grow mb-4">
        {member.description}
      </p>

      
      <button 
        onClick={() => onViewProfile(member)} 
        className="
          text-green-700 
          font-medium 
          text-sm 
          hover:underline 
          hover:text-green-800 
          transition-colors 
          duration-200
        "
      >
        View profile &gt;
      </button>
    </div>
  );
};

export default TeamMemberCard;