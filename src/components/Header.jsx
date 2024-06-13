import React, { useState } from "react";
import Meesho from "../assets/images/meesho.png";
import Image from "next/image";
import User from "../assets/images/image.png";
import mobile from "../assets/images/mobile.png";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";

export const Header = () => {
  const [inputValue, setInput] = useState();
  return (
    <>
      <header className="flex text-black items-center justify-between p-3">
        <div className="flex gap-10">
          <div className="flex justify-center items-center">
            <Image src={Meesho} width={200} />
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[400px] flex items-center border p-1 py-2">
              <div className="w-5 m-1.5">
                <Image src={search} alt="Search Icon" />
              </div>
              <form className="w-full">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Try Saree, Kurti or Search by Product Code"
                  className="w-full text-lg border-none outline-none text-black"
                />
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-2 justify-center items-center">
              <Image src={mobile} height={30} />
              <span>Download App</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            Become a Supplier
          </div>
          <div className="flex justify-center items-center">Newsroom</div>
          <div className="flex justify-center items-center  h-full">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={User}
                width={20}
                height={20}
                className="mb-1"
                alt="User Icon"
              />
              <p>Profile</p>
            </div>
          </div>
          <div className="flex justify-center items-center  h-full">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={cart}
                width={20}
                height={20}
                className="mb-1"
                alt="User Icon"
              />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
