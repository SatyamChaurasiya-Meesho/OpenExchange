import React from "react";
import { ProductCard } from "./ProductCard";

export const HomeSection = () => {
  return (
    <div>
      <h2 className="text-center">Home</h2>
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
