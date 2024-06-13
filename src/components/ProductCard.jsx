import React from "react";
import Image from "next/image";
import { Tshirt } from "../assets/images/Tshirt.webp";

export const ProductCard = ({ title }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white">
      <Image
        className="w-full"
        src={Tshirt}
        alt={title}
        width={200}
        height={200}
      />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};
