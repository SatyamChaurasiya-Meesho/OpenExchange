// components/layout/Layout.tsx
import React from 'react';
import { Inter } from 'next/font/google';
import {Header} from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`bg-white min-h-screen flex flex-col ${inter.className}`}>
      <Header />
      <main className="flex flex-col flex-grow items-center justify-center w-full p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
