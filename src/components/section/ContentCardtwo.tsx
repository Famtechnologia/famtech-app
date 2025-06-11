
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';


interface ContentCardProps {
  stepNumber: number | string; 
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  
  stepNumberBgColorClass?: string; 
  stepNumberTextColorClass?: string; 
  buttonBorderColorClass?: string; 
  buttonTextColorClass?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  stepNumber,
  heading,
  description,
  buttonText,
  buttonHref,
  stepNumberBgColorClass = 'bg-green-800',
  stepNumberTextColorClass = 'text-green-200',
  buttonBorderColorClass = 'border-green-400',
  buttonTextColorClass = 'text-gray-800', 
}) => {
  return (
    
    <div className="max-w-7xl mx-auto inline-flex flex-col md:items-start md:text-left items-center text-center lg:max-w-[500px] lg:my-auto  md:text-left space-y-4  mx-auto md:mx-0"> 
      <p
        className={`
          px-4 py-2  flex-shrink-0 rounded-lg inline-flex items-center justify-center 
          whitespace-nowrap md:justify-start font-medium lg:justify-start lg:float-left lg:mx-0

          ${stepNumberBgColorClass} ${stepNumberTextColorClass}
        `}
      >
        {stepNumber}
      </p>

      {/* Heading */}
      <h2 className="text-center md:text-left text-lg md:text-xl font-medium mb-2"> 
        {heading}
      </h2>

      {/* Description */}
      <p className="text-center md:text-left text-xs lg:text-base italic text-gray-600 mb-4 leading-relaxed"> 
        {description}
      </p>

      {/* Get Started Button */}
      <a
        href={buttonHref}
        className={`
          inline-flex items-center justify-center md:justify-start md:mx-0 md:text-left
          px-4 py-2 rounded-lg border whitespace-nowrap
          text-xs font-medium transition-colors duration-200
          hover:bg-green-800 hover:text-white
          ${buttonBorderColorClass} ${buttonTextColorClass}
          w-auto md:w-auto 
        `}
      >
        {buttonText} <IoIosArrowForward size={15} className="ml-1" />
      </a>
    </div>
  );
};

export default ContentCard;