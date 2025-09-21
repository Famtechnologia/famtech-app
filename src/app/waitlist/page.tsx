'use client';
import React from 'react';
import { Sprout, Users, TrendingUp, Leaf, Target, Clock } from 'lucide-react';
import CountdownTimer from '@/components/waitlist/CountDownTimer';
import WaitlistForm from '@/components/waitlist/Waitlist';
import Navbar from '@/components/section/Navbar2';
import Footer from '@/components/section/Footer';

const Index = () => {
  const features = [
    {
      icon: Sprout,
      title: "Smart Farming",
      description: "AI-powered crop monitoring and optimization"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Real-time insights and performance metrics"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with farmers and agricultural experts"
    }
  ];

  
  

  return (
    <div className="min-h-screen bg-white">
        <Navbar/>
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute top-20 left-10 text-green-500/30 animate-bounce mt-12">
          <Leaf className="w-20 h-20" />
        </div>
        <div className="absolute top-40 right-20 text-green-500/30 animate-pulse">
          <Sprout className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-green-500/30 animate-bounce">
          <Target className="w-12 h-12" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 mt-16">

            <p className="text-xl sm:text-2xl text-gray-600 mb-6 max-w-2xl mt-16 mx-auto">
              Revolutionizing agriculture with cutting-edge technology and data-driven insights
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <Clock className="w-5 h-5" />
              <span>Launching Soon</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Get Ready for Launch
            </h2>
            <CountdownTimer />
          </div>

          {/* Waitlist Form */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              Join Our Waitlist
            </h3>
            <WaitlistForm />
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-green-500/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Index;