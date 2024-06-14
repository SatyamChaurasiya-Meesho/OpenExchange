// src/pages/openExchange.tsx
import { useRouter } from 'next/router';
import React from 'react';
import AccountHeader from '@/components/AccountHeader';
import OrderCard from '@/components/OrderCard';
import Sidebar from '@/components/SideBar';
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

const username = "John Doe";

const OpenExchange = () => {
  const router = useRouter();
  const { id } = router.query;
  const selectedItem = sampleData.find(item => item.id === parseInt(id as string));

  if (!selectedItem) {
    return <div className='flex justify-center items-center'>
      <div className="loader border-blue-500"></div>
      <style jsx>{`
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .loader {
        border-top-color: transparent;
        border-style: solid;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        border-width: 4px;
        animation: spin 1s linear infinite;
      }
    `}</style>
    </div>;
  }

  return (
    <main className={`bg-white text-black flex flex-col min-h-screen ${inter.className}`}>
      <AccountHeader username={username} />
      <div className="flex flex-1 border-t">
        <Sidebar />
        <div className="flex-1 p-4">
          <div className="w-full border-l">
            <div className="flex flex-col gap-2 px-6">
              <OrderCard
                key={selectedItem.id}
                imageSrc={selectedItem.imageSrc}
                brandName={selectedItem.brandName}
                productName={selectedItem.productName}
                size={selectedItem.size}
                category={selectedItem.category}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OpenExchange;
