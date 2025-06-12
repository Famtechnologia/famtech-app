// app/layout.tsx
import './styles/special.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../components/auth/AuthProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter', });

export const metadata = {
  title: 'Famtech - Smart Agriculture Platform',
  description: 'Revolutionizing Agriculture with Smart Technology',
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={inter.className} >
      <body >
        <AuthProvider>
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
