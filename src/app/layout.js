import './globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../lib/hooks/useAuth';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Famtech - Smart Agriculture Platform',
  description: 'Revolutionizing Agriculture with Smart Technology',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
      </html>
  );
}