// app/page.tsx
import React from 'react';
import { Metadata } from 'next';
import type { Viewport } from 'next';
import App from '../components/App';

// 🔍 SEO & Social Metadata
export const metadata: Metadata = {
  title: 'Famtech | The operating system for African farms',
  description:
    'Famtech is the operating system for African farms. Manage your farm, keep records and turn everyday work into verified data, intelligent insight and access to finance, plus smart tools like sprayer drones, planters and harvesters.',
  keywords: [
    'smart farming',
    'agriculture technology',
    'digital farming solutions',
    'farm management',
    'precision agriculture',
    'agricultural innovation',
    'farming software',
    'crop monitoring',
    'sustainable farming',
    'agtech'
  ],
  authors: [{ name: 'Famtech Team' }],
  creator: 'Famtech',
  publisher: 'Famtech',
  applicationName: 'Famtech',
  category: 'Agriculture Technology',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.famtech.llc',
    siteName: 'Famtech',
    title: 'Famtech | The operating system for African farms',
    description:
      'Manage your farm, keep records and turn everyday work into verified data, intelligent insight and access to finance. Built in Africa, for African agriculture.',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Famtech - Modern Agriculture Technology',
        type: 'image/jpeg'
      },
      {
        url: '/images/og-logo.png',
        width: 400,
        height: 400,
        alt: 'Famtech Logo',
        type: 'image/png'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    site: '@famtech',
    creator: '@famtech',
    title: 'Famtech - Smart Farming Solutions',
    description:
      'Revolutionary digital farming solutions for modern agriculture. Join 500+ farms using our smart technology.',
    images: ['/og-home.jpg']
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code'
  },

  alternates: {
    canonical: 'https://www.famtech.llc',
    languages: {
      'en-US': 'https://www.famtech.llc',
      'en-GB': 'https://www.famtech.llc/en-gb'
    }
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Famtech'
  },

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#16a34a'
      }
    ]
  },

  manifest: '/site.webmanifest',

  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#16a34a',
    'msapplication-config': '/browserconfig.xml'
  }
};

// 📱 Viewport configuration (for theme-color, color-scheme, viewport)
// Moved out from metadata to avoid deprecation warnings in Next.js 14+ :contentReference[oaicite:1]{index=1}
export const viewport: Viewport = {
  themeColor: '#16a34a',
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Famtechnologia',
  description:
    'Innovative digital farming solutions bridging tradition and technology for modern agriculture.',
  url: 'https://www.famtech.llc',
  logo: 'https://www.famtech.llc/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+234-912-748-3717',
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://www.instagram.com/_famtech?igsh=aGM0a21jbTFyMzNj',
    'https://www.facebook.com/share/1AnR1tyTV4/',
    'https://www.linkedin.com/company/famtechnologia/',
    'https://x.com/_Famtech'
  ],
  offers: {
    '@type': 'Offer',
    description: 'Smart farming solutions and agricultural technology services',
    category: 'Agriculture Technology'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1'
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <App />
    </>
  );
}
