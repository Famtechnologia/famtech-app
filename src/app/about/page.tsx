'use client'
import React from 'react'
import Navbar2 from '@/components/section/Navbar2';
import Hero from '@/components/aboutsection/Hero'
import OurStory from '@/components/aboutsection/OurStory';
import  Integrate from '@/components/aboutsection/Integrate';
import Footer from '@/components/section/Footer';
import PreFooter from '@/components/aboutsection/PreFooter';
import Cards from '@/components/aboutsection/Cards'
const page:React.FC = () => {
  return (
  <>
  
  <Navbar2/>
  <Hero/>
  <OurStory/>
  <Integrate/>
  <Cards/>
  <PreFooter/>
  <Footer/>
  </>
    
  );
};



export default page
