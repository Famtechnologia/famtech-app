'use client';
import React from 'react';


interface SectionTitleProps {
  title: string; 
  className?: string; 
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <h3 className={`text-xs font-small shadow-md w-fit rounded-full border border-solid
     border-transparent mx-auto p-1 text-center items-center justify-center ${className || ''}        
      `}
    >
        {title}</h3>
  );
};

export default SectionTitle;