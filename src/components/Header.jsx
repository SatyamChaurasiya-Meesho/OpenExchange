import React from "react";
import Meesho from "../assets/images/meesho.png";
import Image from "next/image";
import meesho_logo from "../assets/images/meesho_logo.gif";
import mobile from "../assets/images/mobile.png";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-18 p-2 border">
      <div className="flex">
        <div className="flex justify-center items-center">
          <Image src={Meesho} width={200} />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-5 m-1.5">
            <Image src={search} alt="Search Icon" />
          </div>
          <form className="w-full">
            <input
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Code"
              className="w-full text-lg border-none outline-none"
            />
          </form>
        </div>
        <div className="flex justify-center items-center"></div>
        <div className="flex justify-center items-center"></div>
        <div className="flex justify-center items-center"></div>
        <div className="flex justify-center items-center"></div>
      </div>
    </header>
  );
};
