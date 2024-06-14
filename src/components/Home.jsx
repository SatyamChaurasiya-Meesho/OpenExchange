import React from "react";
import { ProductCard } from "./ProductCard";

export const HomeSection = () => {
  return (
    <div className="pt-[90px]">
      <h2 className="text-center text-black font-semibold text-xl">
        Welcome to Meesho
      </h2>
      <div className="flex gap-4 justify-between flex-wrap">
        {Array(30)
          .fill(2)
          .map((item, index) => (
            <ProductCard key={index} title="Tshirt Good" />
          ))}
      </div>
    </div>
  );
};
