// app/layout.tsx
import './styles/special.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../components/auth/AuthProvider';
import type { Metadata } from 'next';
import type { Viewport } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// 🌐 SEO & Social Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://famtechnologia.com'),
  title: 'Famtech – Smart Farming Solutions | Bridging Tradition and Technology',
  description: 'Famtech reimagines farming for a connected world...',

  keywords: ['smart farming', 'agriculture technology', 'digital farming', 'agtech'],
  authors: [{ name: 'Famtech Team' }],
  creator: 'Famtech',
  publisher: 'Famtech',
  applicationName: 'Famtech',
  category: 'Agriculture Technology',

  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://famtechnologia.com',
    siteName: 'Famtech',
    title: 'Famtech – Smart Farming Solutions',
    description: 'Revolutionary digital farming solutions...',
    images: [
      {
        url: '/images/home/agriculture-healthy-food.jpg',
        width: 1200, height: 630,
        alt: 'Famtech – Modern Agriculture Technology',
        type: 'image/jpeg'
      },
      {
        url: '/images/og-logo.png',
        width: 400, height: 400,
        alt: 'Famtech Logo',
        type: 'image/png'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    site: '@famtech',
    creator: '@famtech',
    title: 'Famtech – Smart Farming Solutions',
    description: 'Digital farming solutions for modern agriculture.',
    images: ['/images/home/agriculture-healthy-food.jpg']
  },

  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code'
  },

  alternates: {
    canonical: 'https://famtechnologia.com',
    languages: { 'en-US': 'https://famtechnologia.com', 'en-GB': 'https://famtechnologia.com/en-gb' }
  },

  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Famtech' },

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#16a34a' }]
  },

  manifest: '/site.webmanifest',

  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#16a34a',
    'msapplication-config': '/browserconfig.xml'
  }
};


export const viewport: Viewport = {
  themeColor: '#fffff',    
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

// RootLayout with global styles and providers
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-white text-gray-800 antialiased'>
        <AuthProvider>
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
