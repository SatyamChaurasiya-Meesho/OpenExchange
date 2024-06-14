// src/components/MyProductCard.tsx
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

interface MyProductCardProps {
  id: number;
  imageSrc: string;
  brandName: string;
  productName: string;
  size: string;
}

const MyProductCard: React.FC<MyProductCardProps> = ({ id, imageSrc, brandName, productName, size }) => {
  return (
    <div className='flex flex-col gap-2 p-2 border rounded shadow-md bg-gray-200'>
      <div className='flex flex-col'>
        <div>
          <span className='text-green-600 font-bold'>Delivered</span>
        </div>
        <div className='text-black mt-2'>
          <div className="overflow-hidden bg-white flex mb-4 p-2">
            <div className="w-1/3 relative">
              <Image src={imageSrc} alt={productName} layout="fill" objectFit="cover" />
            </div>
            <div className="flex-1 p-2">
              <div className="font-bold text-sm mb-1">{brandName}</div>
              <p className="text-gray-700 text-sm">{productName}</p>
              <p className="text-gray-500 text-xs">Size: {size}</p>
            </div>
          </div>
          <div className='flex gap-4 mt-2'>
            <Link href={`/openExchange?id=${id}`} className='text-black-500 hover:underline text-sm bg-white p-1'>
              Open Exchange/Return
            </Link>
          </div>
          <p className='mt-2 text-gray-500 text-sm'>
            Exchange/Return available till 14 May 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyProductCard;
