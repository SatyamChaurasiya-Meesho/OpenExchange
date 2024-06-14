import React from 'react';

interface HeaderProps {
  username: string;
}

const AccountHeader: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="w-full bg-white text-black p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-l font-bold">Shopping for {username}</h1>
      </div>
    </header>
  );
};

export default AccountHeader;
