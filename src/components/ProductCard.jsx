import React from "react";
import Image from "next/image";

export const ProductCard = ({ title, img, price, rating }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white text-black cursor-pointer">
      <Image
        className="w-full"
        src={img}
        alt={title}
        height={190}
        width={100}
        objectFit="cover"
      />
      <div className="px-2 py-4">
        <div className="font-semibold  text-gray-400 mb-1">{title}</div>
        <div className="flex gap-2 mb-1">
          <span className="font-bold text-xl">{price}</span>
          <span className="font-semibold text-sm flex items-end">onwards</span>
        </div>
        <div className="mb-1">
          <span className="font-semibold text-sm text-gray-400">
            Free delivery
          </span>
        </div>
        <div className="flex gap-1">
          <div className="p-2 py-1 bg-green-600 rounded-2xl">
            <span className="font-bold text-white">{rating} *</span>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};
