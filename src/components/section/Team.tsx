// src/components/section/Team.tsx
'use client'; 

import React, { useRef, useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import TeamMemberCard, { TeamMember } from '@/components/section/TeamMemberCard'; 
import { TeamMemberModal } from '@/components/ui/Modal'; 

const Team: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // === UPDATED TEAM MEMBERS DATA WITH EMAIL AND LINKEDIN (can be empty strings) ===
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Precious Adedoyin',
      title: 'Founder',
      description: 'Building an efficient AI-farm platform to help farms around the world.',
      fullDescription: `PRECIOUS ADEDOYIN (CEO) is a visionary product designer and tech entrepreneur with many years of experience creating scalable, human-centered digital solutions across diverse industries, including Agritech, Fintech, Blockchain, Logistics, and Digital Monitoring Systems. He holds a Professional Software Engineering Diploma (PSEd) from NIIT, combining strong technical competence with deep design intuition to drive innovation that delivers measurable results. He is the Founder/CEO of Famtech, an emerging leader in Africa's agritech space. Through Famtech, Adedoyin is building cutting-edge SaaS platforms and intelligent tools that enable farmers to optimize operations, improve traceability, and increase market access through a data-powered decision-making process.`,
      imageUrl: '/images/home/Founder.jpg',
      email: 'Preciousadedoyin66@gmail.com', 
      linkedinUrl: 'https://www.linkedin.com/in/precious-a-4407751a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
    },
    {
      id: '2',
      name: 'Samuel Oluwatobi',
      title: 'Chief Operating Officer',
      description: 'Developing robust software solutions for scalable agriculture.',
      fullDescription: `SAMUEL OLUWATOBI (COO) Oluwatobi has consistently empowered farmers, cooperatives, and agribusinesses to increase productivity, improve operational efficiency, and build more resilient and profitable enterprises. He holds a Master's degree in agronomy and has close to a decade of hands-on experience in farm establishment, management, and agricultural consulting. Oluwatobi is a strategic thinker and values-driven leader who believes that Africa holds the potential for true economic liberation if the continent fully harnesses the vast opportunities within its agricultural sector. The Founder/CEO of Farmdev Consult, a trailblazing agricultural consulting firm dedicated to transforming Africa's agribusiness landscape through innovation, sustainability, and technology-driven solutions, his values-driven approach is rooted in excellence, integrity, productivity, and inclusive growth, making him a respected voice in Africa's agricultural transformation.`,
      imageUrl: '/images/home/tobiii.jpg',
      email: 'soluwatobiemmanuel@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/in/oluwatobi-samuel-2934b0113?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
    },
    {
      id: '3',
      name: 'Obinna Ozoigbo',
      title: 'Chief Financial Officer',
      description: 'Building an efficient AI-farm platform to help farms around the world.',
      fullDescription: `OBINNA OZOIGBO (CFO) started his banking career in 1991 in the defunct Hallmark Bank Plc, where he worked meritoriously until 2005. In 2006, he went into mainstream finance and accounting, against the backdrop of digital technology, offering his expertise as a prudent C-Suite executive over a 15-year period in Technology, Fintech, FMCG, Banking and Non-Banking Financial Services, Hospitality, Logistics & Supply Chain, and Oil & Gas, with a skill-set that cuts across Investor Relations, Asset Management, Risk Management & Internal Control, Compliance, Credit & Investment Portfolio Management, Treasury, and Corporate Governance. A devout Christian, whose marriage is blessed with four children, Ozoigbo is a member of the Chartered Institute of Bankers of Nigeria (CIBN), the Nigerian Institute of Management (NIM), the Institute of Chartered Accountants of Nigeria (ICAN), the Institute of Certified Business Consultants (ICBC), and the Chartered Institute of Management Accountants (CIMA). He holds an MBA from the University of Calabar, Nigeria.`,
      imageUrl: '/images/home/cfo.png',
      email: 'obinnaozoigbo@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/in/obinna-ozoigbo-70a36537?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' // Example LinkedIn URL
    },
    {
      id: '4',
      name: 'Onaneye Joseph',
      title: 'Chief Technology Officer',
      description: 'Developing robust software solutions for scalable agriculture.',
      fullDescription: `JOSEPH A. ONANEYE (CTO) is a dynamic software engineer with many years of technology experience, specializing in crafting responsive, user-centric applications. With a robust foundation in WordPress, JavaScript, React, and Next.js, he has led the development of high-performance web solutions across diverse industries, including healthcare, e-commerce, and social engagement platforms. Deeply committed to delivering seamless user experiences, while adhering to best practices and modern development standards, Onaneye is a passionate, forward-thinking certified full stack developer who enjoys building seamless, user-friendly web applications, with a keen interest in technology-driven business solutions. His skill-set cuts across programming languages, frameworks and libraries, styling, tools and platforms, deployment, and API integration and automation. Known for his significant contributions to UI/UX design, Onaneye has worked on multiple projects, including gifting platforms, eCommerce sites, and social media engagement apps. He also played a pivotal role in the development of Iyewo, an eHealth software solution designed to serve market women and elderly individuals. A skilled communicator and strategic thinker, Onaneye thrives at translating complex client requirements into robust, scalable technical solutions. His passion lies in using technology to bridge human connection gaps and to improve quality of life. As the Founder/CEO of TechsspaceX, he prioritizes security and performance optimization, driven by a clear vision that encompasses innovation and impact.`,
      imageUrl: '/images/home/joseph.jpg',
      email: 'onaneyeayodeji@gmail.com', 
      linkedinUrl: 'https://www.linkedin.com/in/adedire-onaneye-044ba1358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' 
    },

    {
      id: '5',
      name: 'Akinwunmi T. Adebayo ',
      title: 'Chief Agriculture Officer',
      description: 'Connecting farmers with our innovative solutions globally.',
      fullDescription: `AKINWUNMI T. ADEBAYO (CAO) is a Christocentric data analyst and certified Microsoft Power BI Associate with a degree in agricultural economics from Olabisi Onabanjo University, Nigeria. Originally trained in animal science, Akinwunmi transitioned to agricultural economics to align with his passion for data analytics and tech-driven solutions in agriculture. With experience across over 300 academic projects, he brings premium expertise in MS Excel, SPSS, statistical modeling, and data visualization, helping students and businesses to unlock actionable insights in the agritech space. In his professional journey, he has worked with SideHustle (now Terra Learning), an edtech platform for training in digital skills. Akinwunmi has offered consultancy services in which he supports data-driven decision-making and business intelligence initiatives. Beyond analytics, he has over a decade of hands-on experience in livestock farming and is deeply committed to agricultural investment and agritech innovations. Passionate about advancing agriculture through the power of technology and data analytics, Akinwunmi upholds strong Christian values at the core of his personal and professional life.`,
      imageUrl: '/images/home/Tolu.png',
      email: 'toluwaniakin2020@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/in/toluwani-akinwunmi-864aa7142' 
    },
  ];

  // Handle scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const progress = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(progress);
        
        // Calculate active index based on scroll position
        const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
        const newActiveIndex = Math.round(scrollLeft / (cardWidth + 16)); // 16px gap
        setActiveIndex(Math.min(newActiveIndex, teamMembers.length - 1));
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [teamMembers.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      const gap = 16; // 1rem = 16px
      const scrollAmount = cardWidth + gap;
      
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      const gap = 16;
      const scrollPosition = index * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              Our Team
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
              Meet the Visionaries
              <span className="block text-emerald-600">behind Famtech</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of experts combines decades of experience in agriculture, technology, 
              and business to revolutionize farming through innovation.
            </p>
          </div>

          {/* Team Cards Section */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                                  bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl
                                  hover:bg-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/30
                                  transition-all duration-300 hover:scale-110 group
                                  border border-white/20"
              aria-label="Previous team member"
            >
              <svg className="w-6 h-6 text-slate-700 group-hover:text-emerald-600 transition-colors" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                                  bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl
                                  hover:bg-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/30
                                  transition-all duration-300 hover:scale-110 group
                                  border border-white/20"
              aria-label="Next team member"
            >
              <svg className="w-6 h-6 text-slate-700 group-hover:text-emerald-600 transition-colors" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div 
              ref={scrollContainerRef} 
              className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-4 
                                  scrollbar-hide px-12 md:px-16"
              style={{ scrollPaddingLeft: '3rem' }}
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className="flex-none w-[300px] md:w-[350px]  snap-center"
                >
                  <TeamMemberCard 
                    member={member} 
                    isHighlighted={index === activeIndex} 
                    onViewProfile={handleViewProfile} 
                  />
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-emerald-600 scale-125' 
                      : 'bg-slate-300 hover:bg-emerald-300'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

            {/* Scroll Progress Bar */}
            <div className="w-full bg-slate-200 h-1 rounded-full mt-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 ease-out rounded-full"
                style={{ width: `${(scrollProgress * 100)}%` }}
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-slate-600">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
              <div className="text-slate-600">Industry Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-slate-600">Committed to Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">∞</div>
              <div className="text-slate-600">Possibilities Ahead</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Member Details Modal */}
      {selectedMember && (
        <TeamMemberModal 
          member={selectedMember} 
          isOpen={isPopupOpen} 
          onClose={closePopup} 
        />
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Team;