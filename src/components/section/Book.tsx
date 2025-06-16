'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sprout, Zap, Cpu } from 'lucide-react';

const Book = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingElements = [
    { icon: Sprout, delay: 0, x: 10, y: 20 },
    { icon: Zap, delay: 1, x: 80, y: 10 },
    { icon: Cpu, delay: 2, x: 90, y: 70 },
    { icon: Sprout, delay: 1.5, x: 15, y: 80 },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Icons */}
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <div
              key={index}
              className={`absolute opacity-20 text-green-300 transition-all duration-1000 delay-${element.delay * 1000}`}
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                animation: `float 6s ease-in-out infinite ${element.delay}s`,
              }}
            >
              <IconComponent size={24} />
            </div>
          );
        })}
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border border-green-400 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-emerald-400 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-8 animate-fade-in">
            <Zap size={16} className="animate-pulse" />
            The Future is Digital
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            We&apos;re not just building{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              software
            </span>
            <br />
            — we&apos;re building the{' '}
            <span className="relative">
              future
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transform scale-x-0 animate-scale-x"></div>
            </span>
            {' '}of farming.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to take your farm{' '}
            <span className="text-green-400 font-semibold">digital</span>?
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary CTA */}
            <a 
            href='mailto:famtechnologia@gmail.com'
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-2xl shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-green-500/40 overflow-hidden"
            onMouseEnter={() => setHoveredButton('demo')}
            onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <span className="text-lg">Book a free demo</span>
                <ArrowRight 
                  size={20} 
                  className={`transition-transform duration-300 ${hoveredButton === 'demo' ? 'translate-x-1' : ''}`} 
                />
              </div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            {/* Secondary CTA */}
            <a
            href='https://wa.me/2349127483717'
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:border-green-400 hover:bg-slate-800/70 hover:scale-105"
            onMouseEnter={() => setHoveredButton('team')}
            onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">Talk to our team</span>
                <ArrowRight 
                  size={20} 
                  className={`transition-all duration-300 ${hoveredButton === 'team' ? 'translate-x-1 text-green-400' : 'text-slate-400'}`} 
                />
              </div>
            </a>
          </div>

          {/* Stats or Social Proof */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: '10K+', label: 'Farms Digitized' },
              { number: '99%', label: 'Uptime Guaranteed' },
              { number: '24/7', label: 'Expert Support' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-1000 delay-${(index + 3) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="text-2xl font-bold text-green-400 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(5px) rotate(-5deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Book;