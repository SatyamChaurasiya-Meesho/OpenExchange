import React from "react";
import Link from 'next/link';

const Sidebar = () => {
    return (
      <div className="bg-white text-black flex flex-col border-gray-300 px-10">
        <div className="mb-2 p-4 font-bold text-l">Your Account</div>
        <nav className="flex flex-col p-4 border-t">
          <Link href="/myOrder" className="mb-2 p-2 hover:bg-gray-100 rounded text-green-600">
            Orders
          </Link>
          <div className="mb-2 p-2 hover:bg-gray-100 rounded"> Profile</div>
           
        </nav>
      </div>
    );
  };
  
  export default Sidebar;