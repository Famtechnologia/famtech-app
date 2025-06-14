// app/contact/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import ContactSection from '@/components/section/ContactSection'; // Your animated client component

// 🌟 SEO Metadata for the page
export const metadata: Metadata = {
  title: 'Contact Us | Famtech – Smart Farming Solutions',
  description: 'Reach out to Famtech for support, demos, or enquiries about our smart farming solutions.',
  openGraph: {
    title: 'Contact Us | Famtech',
    description: 'Reach out to Famtech for support or demos of smart agriculture solutions.',
    type: 'website',
    url: 'https://famtechnologia.com/contact',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Famtech',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Famtech',
    description: 'Reach out for support, demos or enquiries about smart farming technology.',
    images: ['/images/contact-og.jpg'],
  },
};
// Continue below in the same file

// 📄 JSON-LD structured data for ContactPage
const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://famtechnologia.com/contact'
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://famtechnologia.com',
    name: 'Famtech',
    logo: 'https://famtechnologia.com/images/logo.png',
    telephone: '+2349127483717',
    email: 'info@famtechnologia.com',
    sameAs: [
      'https://www.instagram.com/_famtech',
      'https://www.facebook.com/famtechnologia',
      'https://www.linkedin.com/company/famtechnologia',
      'https://x.com/_Famtech'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos',
      postalCode: '100001',
      addressCountry: 'NG'
    }
  },
  url: 'https://famtechnologia.com/contact',
  description: 'Contact Famtech for smart farming solutions.',
  image: 'https://famtechnologia.com/images/contact-og.jpg'
};

export default function ContactPage() {
  return (
    <>
      {/* Structured Data injected into head before React hydration */}
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, '\\u003c')
        }}
      />

      {/* Client-side animated form and page sections */}
      <ContactSection />
    </>
  );
}
