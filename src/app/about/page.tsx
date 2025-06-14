// app/about/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Navbar2 from '@/components/section/Navbar2';
import Hero from '@/components/aboutsection/Hero';
import OurStory from '@/components/aboutsection/OurStory';
import Integrate from '@/components/aboutsection/Integrate';
import Cards from '@/components/aboutsection/Cards';
import PreFooter from '@/components/aboutsection/PreFooter';
import Footer from '@/components/section/Footer';

export const metadata: Metadata = {
  title: 'About Us | Famtech – Smart Farming Solutions',
  description: 'Learn about Famtech’s mission, vision, and team driving innovation in smart agriculture.',
  openGraph: {
    title: 'About Us | Famtech',
    description: 'Discover the Famtech story and our mission to revolutionize modern farming.',
    type: 'website',
    url: 'https://famtechnologia.com/about',
    images: [{ url: '/images/about-og.jpg', width: 1200, height: 630, alt: 'Famtech Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Famtech',
    description: 'Discover the Famtech story and our mission to revolutionize modern farming.',
    images: ['/images/about-og.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar2 />
      <Hero />
      <OurStory />
      <Integrate />
      <Cards />
      <PreFooter />
      <Footer />
    </>
  );
}
