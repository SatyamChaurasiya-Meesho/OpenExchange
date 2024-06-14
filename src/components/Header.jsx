import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [inputValue, setInput] = useState();

  return (
    <>
      <header className="flex text-black items-center justify-between p-5 mb-20 bg-white shadow-md">
        <div className="flex gap-8 items-center">
          <div className="flex justify-center items-center">
            <Image src="/images/meesho.png" width={200} height={46} alt="Meesho Logo" />
          </div>
          <div className="flex items-center">
            <div className="w-[400px] flex items-center border border-gray-300 rounded-full p-2">
              <div className="w-6 h-6 ml-2">
                <Image src="/images/image.png" alt="Search Icon" width={24} height={24} />
              </div>
              <form className="w-full">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Try Saree, Kurti or Search by Product Code"
                  className="w-full text-lg border-none outline-none text-black px-4 py-2 rounded-full"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center cursor-pointer hover:text-gray-600 transition">
            <Image src="/images/mobile.png" height={24} width={24} alt="Mobile Icon" />
            <span className="font-semibold">Download App</span>
          </div>
          <div className="font-semibold cursor-pointer hover:text-gray-600 transition">Become a Supplier</div>
          <div className="font-semibold cursor-pointer hover:text-gray-600 transition">Newsroom</div>
          <div className="relative cursor-pointer group">
            <div className="flex flex-col items-center">
              <Image src="/images/image.png" width={24} height={24} alt="User Icon" />
              <p className="font-semibold">Profile</p>
            </div>
            <div className="absolute top-10 right-0 z-10 w-48 bg-white rounded-lg shadow-lg p-2 hidden group-hover:block">
              <ul className="text-black">
                <li>
                  <Link href="" className="block py-1 px-2 hover:bg-gray-100 rounded transition">
                    Hello, user
                  </Link>
                  <hr className="my-1 border-gray-300" />
                </li>
                <li>
                  <Link href="/myOrders" className="block py-1 px-2 hover:bg-gray-100 rounded transition">
                    My Orders
                  </Link>
                  <hr className="my-1 border-gray-300" />
                </li>
                <li>
                  <Link href="" className="block py-1 px-2 hover:bg-gray-100 rounded transition">
                    Delete account
                  </Link>
                  <hr className="my-1 border-gray-300" />
                </li>
                <li>
                  <Link href="" className="block py-1 px-2 hover:bg-gray-100 rounded transition">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative cursor-pointer hover:text-gray-600 transition">
            <div className="flex flex-col items-center">
              <Image src="/images/cart.png" width={24} height={24} alt="Cart Icon" />
              <p className="font-semibold">Cart</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
