// src/components/MyProductCard.tsx
import React from 'react';
import Image from "next/image";

interface RecommendedProductCardProps {
    id: number;
    imageSrc: string;
    brandName: string;
    productName: string;
    price: number;
}

const RecommendedProductCard: React.FC<RecommendedProductCardProps> = ({ id, imageSrc, brandName, productName, price }) => {
    return (
        <div className='flex flex-col gap-2 p-2 border rounded shadow-md bg-gray-200'>

                <div className='text-black'>
                    <div className="overflow-hidden bg-white flex p-2">
                        <div className=" w-1/4 relative">
                            <Image src={imageSrc} alt={productName} layout="fill" objectFit="cover" />
                        </div>
                        <div className="flex-1 p-2">
                            <div className="font-bold text-sm mb-1">{brandName}</div>
                            <p className="text-gray-700 text-sm">{productName}</p>
                            <p className="text-gray-500 text-xs">Price: {price}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default RecommendedProductCard;
