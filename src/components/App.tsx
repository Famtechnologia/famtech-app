'use client';
import React from 'react';
import Nav from './redesign/Nav';
import Hero from './redesign/Hero';
import Problem from './redesign/Problem';
import Platform from './redesign/Platform';
import Marketplace from './redesign/Marketplace';
import HowItWorks from './redesign/HowItWorks';
import WhyFamtech from './redesign/WhyFamtech';
import FinalCTA from './redesign/FinalCTA';
import Footer from './redesign/Footer';

const App = () => {
  return (
    <div className="bg-paper">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Platform />
        <Marketplace />
        <HowItWorks />
        <WhyFamtech />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
