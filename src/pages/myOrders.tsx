import React from 'react';
import MyProductCard from '../components/myProductCard';
import Sidebar from '../components/SideBar';
import AccountHeader from '../components/AccountHeader';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const sampleData = [
  {
    id: 1,
    category: 'Beauty & Health',
    imageSrc: '/images/beauty1.jpg',
    brandName: 'Awesome Brand',
    productName: 'Cool Product 1',
    size: 'L',
  },
  {
    id: 2,
    category: 'Home & Kitchen',
    imageSrc: '/images/homedecor.jpg',
    brandName: 'Great Brand',
    productName: 'Amazing Product 2',
    size: 'M',
  },
  {
    id: 3,
    category: 'Home & Kitchen',
    imageSrc: '/images/homedecor1.jpg',
    brandName: 'Superb Brand',
    productName: 'Fantastic Product 3',
    size: 'S',
  },
  {
    id: 4,
    category: 'Clothing',
    imageSrc: '/images/sweater.jpg',
    brandName: 'Superb Brand',
    productName: 'Fantastic Product 3',
    size: 'S',
  },
];

const username = "John Doe"; // replace with actual username

export default function MyOrder() {
  return (
    <main className={`bg-white text-black flex flex-col min-h-screen ${inter.className}`}>
      <AccountHeader username={username} />
      <div className="flex flex-1 border-t">
        <Sidebar />
        <div className="flex-1 p-4">
          <div className="w-full border-l">
            <div className="flex flex-col gap-2 px-6">
              {sampleData.map((item) => (
                <MyProductCard
                  key={item.id}
                  id={item.id}
                  imageSrc={item.imageSrc}
                  brandName={item.brandName}
                  productName={item.productName}
                  size={item.size}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
