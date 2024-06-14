import React from "react";
import { ProductCard } from "./ProductCard";

const HomeItems = [
  // Jewellery
  {
    img: "/images/homeaccess1.png",
    title: "Gold Plated Necklace Set",
    price: "₹1200",
    rating: "4.5",
  },
  {
    img: "/images/homeaccess2.png",
    title: "Silver Anklet",
    price: "₹700",
    rating: "4.3",
  },
  {
    img: "/images/homebag1.png",
    title: "Diamond Ring",
    price: "₹5000",
    rating: "4.8",
  },
  {
    img: "/images/homebag2.png",
    title: "Pearl Earrings",
    price: "₹950",
    rating: "4.4",
  },
  {
    img: "/images/homefootwere.png",
    title: "Gold Bangles",
    price: "₹1800",
    rating: "4.6",
  },
  {
    img: "/images/homefootwere2.png",
    title: "Platinum Bracelet",
    price: "₹6500",
    rating: "4.9",
  },

  // Footwear
  {
    img: "/images/homejewell1.png",
    title: "Men's Running Shoes",
    price: "₹1500",
    rating: "4.2",
  },
  {
    img: "/images/homejewell2.png",
    title: "Women's Sandals",
    price: "₹1200",
    rating: "4.1",
  },
  {
    img: "/images/homeMobile1.png",
    title: "Leather Boots",
    price: "₹2500",
    rating: "4.7",
  },
  {
    img: "/images/homeMobile2.png",
    title: "Casual Sneakers",
    price: "₹1300",
    rating: "4.3",
  },
  {
    img: "/images/homeshirt1.png",
    title: "Formal Shoes",
    price: "₹1800",
    rating: "4.5",
  },
  {
    img: "/images/homeshirt2.png",
    title: "Flip Flops",
    price: "₹400",
    rating: "4.0",
  },

  {
    img: "/images/homejewell1.png",
    title: "Men's Running Shoes",
    price: "₹1500",
    rating: "4.2",
  },
  {
    img: "/images/homejewell2.png",
    title: "Women's Sandals",
    price: "₹1200",
    rating: "4.1",
  },
  {
    img: "/images/homeMobile1.png",
    title: "Leather Boots",
    price: "₹2500",
    rating: "4.7",
  },
  {
    img: "/images/homeMobile2.png",
    title: "Casual Sneakers",
    price: "₹1300",
    rating: "4.3",
  },
  {
    img: "/images/homeshirt1.png",
    title: "Formal Shoes",
    price: "₹1800",
    rating: "4.5",
  },
  {
    img: "/images/homeshirt2.png",
    title: "Flip Flops",
    price: "₹400",
    rating: "4.0",
  },
];

export const HomeSection = () => {
  return (
    <div className="pt-[90px]">
      <h2 className="text-center text-black font-semibold text-xl">
        Welcome to Meesho
      </h2>
      <div className="flex gap-4 justify-between flex-wrap">
        {HomeItems.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};
