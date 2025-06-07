// src/components/section/Team.tsx
'use client'; 

import React, { useRef, useState } from 'react';
import SectionTitle from './SectionTitle';
import TeamMemberCard, { TeamMember } from '@/components/section/TeamMemberCard'; 
import TeamMemberDetailsPopup from '@/components/section/TeamMemberDetailsPopup'; 

const Team: React.FC = () => {
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Precious Adedoyin',
      title: 'Founder',
      description: 'Building an efficient AI-farm platform to help farms around the world.',
      // ADD THE FULL DESCRIPTION HERE
      fullDescription: `PRECIOUS ADEDOYIN (CEO) is a visionary product designer and tech entrepreneur with many
       years of experience creating scalable, human-centered digital solutions across diverse industries, including 
       Agritech, Fintech, Blockchain, Logistics, and Digital Monitoring Systems. He holds a Professional Software 
       Engineering Diploma (PSEd) from NIIT, combining strong technical competence with deep design intuition to
        drive innovation that delivers measurable results. He is the Founder/CEO of Famtech, an emerging leader 
        in Africa’s agritech space. Through Famtech, Adedoyin is building cutting-edge SaaS platforms and
         intelligent tools that enable farmers to optimize operations, improve traceability, and increase 
         market access through a data-powered decision-making process.`,
      
      imageUrl: '/Founder.jpg'
    },

    {
      id: '2',
      name: 'Akinwunmi T. Adebayo ',
      title: 'Chief Administrative Officer',
      description: 'Connecting farmers with our innovative solutions globally.',
      fullDescription: `AKINWUNMI T. ADEBAYO (CAO) is a Christocentric data analyst and certified Microsoft Power BI Associate with a degree in agricultural economics from Olabisi Onabanjo University, Nigeria. Originally trained in animal science, Akinwunmi transitioned to agricultural economics to align with his passion for data analytics and tech-driven solutions in agriculture. With experience across over 300 academic projects, he brings premium expertise in MS Excel, SPSS, statistical modeling, and data visualization, helping students and businesses to unlock actionable insights in the agritech space. In his professional journey, he has worked with SideHustle (now Terra Learning), an edtech platform for training in digital skills.
      Akinwunmi has offered consultancy services in which he supports data-driven decision-making and business intelligence initiatives. Beyond analytics, he has over a decade of hands-on experience in livestock farming and is deeply committed to agricultural investment and agritech innovations. Passionate about advancing agriculture through the power of technology and data analytics, Akinwunmi upholds strong Christian values at the core of his personal and professional life.
`,
      
      imageUrl: '/Tolu.jpg'
    },

    {
      id: '3',
      name: 'Obinna Ozoigbo',
      title: 'Chief Financial Officer',
      description: 'Building an efficient AI-farm platform to help farms around the world.',
      fullDescription: `OBINNA OZOIGBO (CFO) started his banking career in 1991 in the defunct Hallmark Bank Plc, where he worked meritoriously until 2005. In 2006, he went into mainstream finance and accounting, against the backdrop of digital technology, offering his expertise as a prudent C-Suite executive over a 15-year period in Technology, Fintech, FMCG, Banking and Non-Banking Financial 
      Services, Hospitality, Logistics & Supply Chain, and Oil & Gas, with a skill-set that cuts across Investor 
      Relations, Asset Management, Risk Management & Internal Control, Compliance, Credit & 
      Investment Portfolio Management, Treasury, and Corporate Governance. A devout Christian,
       whose marriage is blessed with four children, Ozoigbo is a member of the Chartered Institute 
       of Bankers of Nigeria (CIBN), the Nigerian Institute of Management (NIM), the Institute of
        Chartered Accountants of Nigeria (ICAN), the Institute of Certified Business Consultants 
        (ICBC), and the Chartered Institute of Management Accountants (CIMA). He holds an MBA from 
        the University of Calabar, Nigeria.`,
      
      imageUrl: '/cfo.png'
    },
    {
      id: '4',
      name: 'Onaneye Joseph',
      title: ' Chief Technology Officer',
      description: 'Developing robust software solutions for scalable agriculture.',
      fullDescription: `JOSEPH A. ONANEYE (CTO) is a dynamic software engineer with many years of technology experience, specializing in crafting responsive, user-centric applications. With a robust foundation in WordPress, JavaScript, React, and Next.js, he has led the development of high-performance web solutions across diverse industries, including healthcare, e-commerce, and social engagement platforms. Deeply committed to delivering seamless user experiences, while adhering to best practices and modern development standards, Onaneye is a passionate, forward-thinking certified full stack developer who enjoys building seamless, user-friendly web applications, with a keen interest in technology-driven business solutions. 
      His skill-set cuts across programming languages, frameworks and libraries, styling, tools and platforms, deployment, and API integration and automation. Known for his significant contributions to UI/UX design, Onaneye has worked on multiple projects, including gifting platforms, eCommerce sites, and social media engagement apps. He also played a pivotal role in the development of Iyewo, an eHealth software solution designed to serve market women and elderly individuals. A skilled communicator and strategic thinker, Onaneye thrives at translating complex client requirements into robust, scalable technical solutions. His passion lies in using technology to bridge human connection gaps and to improve quality of life. As the Founder/CEO of TechsspaceX, he prioritizes security and performance optimization, driven by a clear vision that encompasses innovation and impact.`,
      
      imageUrl: '/joseph.jpg'
    },
    
    
    
  ];

  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; 
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleViewProfile = (member: TeamMember) => {
    setSelectedMember(member);
    setIsPopupOpen(true); 
  };

  const closePopup = () => {
    setIsPopupOpen(false); 
  };

  return (
    <div className="min-h-auto py-12 px-4 sm:px-6 lg:px-28 font-sans">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title='Our Team'/>
        <div className="relative mt-10 md:mt-16">
          
          <button
            onClick={() => scroll('left')}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 
              bg-white rounded-full p-2 shadow-md 
              hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 
              z-10 
              md:block 
              transition-transform duration-200 hover:scale-110
            "
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 
              bg-white rounded-full p-2 shadow-md 
              hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 
              z-10 
              md:block
              transition-transform duration-200 hover:scale-110
            "
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
            </svg>
          </button>

          <div 
            ref={scrollContainerRef} 
            className="
              flex                 
              overflow-x-auto       
              snap-x
              snap-mandatory        
              pb-4                 
              space-x-6             
              px-4
              md:px-8               
              lg:space-x-8          
              scrollbar-hide        
            "
          >
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="
                  flex-none           
                  w-[85vw]           
                  sm:w-[60vw]         
                  md:w-[45vw]         
                  lg:w-[30vw]         
                  xl:w-[22vw]         
                  snap-center         
                "
              >
                <TeamMemberCard 
                  member={member} 
                  isHighlighted={index === 1} 
                  onViewProfile={handleViewProfile} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {selectedMember && (
        <TeamMemberDetailsPopup member={selectedMember} onClose={closePopup} isOpen={isPopupOpen} />
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Team;