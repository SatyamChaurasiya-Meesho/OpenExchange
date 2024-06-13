import React from 'react'
import productImage from '../assets/images/productImage.png'
import Image from "next/image";
import Link from 'next/link';

export default function MyProductCard() {
  return (
    <div className='flex flex-col gap-2 p-4 border rounded shadow-md'>
      <div className='flex flex-col'>
        <div>
          <span className='text-green-600 font-bold'>Delivered</span>
        </div>
        <div className='text-black mt-2'>
          <div className='flex gap-5'>
            <Image src={productImage} width={50} height={50} alt='Product Image' />
            <div className='text-black'>
              <p className='font-semibold truncate'>Title</p>
              <p className='text-gray-600 truncate'>Description</p>
              <p className='text-gray-600 truncate'>Type</p>
            </div>
          </div>
          <div className='flex gap-4 mt-2'>
            <Link href={"/styleExchange"}
               className='text-blue-500 hover:underline'>Style Exchange
            </Link>
            <Link href={"/openExchange"}
              className='text-blue-500 hover:underline'>Open Exchange
            </Link>
            <Link href={"/return"}
              className='text-blue-500 hover:underline'>Return
            </Link>
          </div>
          <p className='mt-2 text-gray-500'>
            Exchange/Return available till 14 May 2024
          </p>
        </div>
      </div>
    </div>
  )
}
