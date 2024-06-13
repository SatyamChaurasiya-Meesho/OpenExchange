import React from 'react';
import MyProductCard from '../components/myProductCard';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export default function MyOrder() {
  return (
    <main
      className={`bg-white text-black p-4 flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <div className="w-full max-w-6xl"> 
        <h2 className='text-center text-2xl font-semibold mb-6'>My Orders</h2>
        <div className="flex-col gap-2">
          <MyProductCard />
          <MyProductCard />
          <MyProductCard />
          <MyProductCard />
        </div>
      </div>
    </main>
  );
}
