// src/components/common/OrderCard.tsx

import { FC, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import reviews from '../assets/constants/reviews.json';

interface OrderCardProps {
  imageSrc: string;
  brandName: string;
  productName: string;
  size: string;
  category: string;
}

interface Issue {
  name: string;
  sub_issues: string[];
}

interface Category {
  name: string;
  issues: Issue[];
}

interface ReviewsData {
  categories: Category[];
}

const OrderCard: FC<OrderCardProps> = ({ imageSrc, brandName, productName, size, category }) => {
  const reviewsData: ReviewsData = reviews; // Assuming reviews.json is correctly imported

  const [selectedIssue, setSelectedIssue] = useState<string>('');
  const [selectedSubIssue, setSelectedSubIssue] = useState<string>('');

  const handleIssueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIssue(event.target.value);
    setSelectedSubIssue(''); // Reset sub-issue selection when issue changes
  };

  const handleSubIssueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubIssue(event.target.value);
  };

  const issues = reviewsData.categories.find(cat => cat.name === category)?.issues;

  const isContinueEnabled = selectedIssue !== '' && selectedSubIssue !== '';

  const router = useRouter();

  const handleContinue = () => {
    router.push('/recommendations');
  };

  const handleBackToOrders = () => {
    router.push('/myOrders');
  };

  return (
    <div className='relative flex flex-col gap-2 p-2 border rounded shadow-md bg-gray-200'>
      <div className='text-black gap-2 flex flex-col'>
        <div className="overflow-hidden bg-white flex p-2 relative">
          <div className=" w-1/6 relative">
            <Image src={imageSrc} alt={productName} layout="fill" objectFit="cover" />
          </div>
          <div className="flex-1 p-2">
            <div className="font-bold text-sm mb-1">{brandName}</div>
            <p className="text-gray-700 text-sm">{productName}</p>
            <p className="text-gray-500 text-xs">Size: {size}</p>
          </div>
        </div>
        <div className='overflow-hidden bg-white p-2'>
          <p className='font-bold text-sm'>Why are you returning?</p>
          <p className="text-gray-700 text-sm">Please choose the correct reason for return. This information is only used to improve our service.</p>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">Issue:</label>
            <select
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={selectedIssue}
              onChange={handleIssueChange}
            >
              <option value="">Select an issue</option>
              {issues?.map(issue => (
                <option key={issue.name} value={issue.name}>{issue.name}</option>
              ))}
            </select>
          </div>
          {selectedIssue && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Sub-issue:</label>
              <select
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedSubIssue}
                onChange={handleSubIssueChange}
              >
                <option value="">Select a sub-issue</option>
                {issues?.find(issue => issue.name === selectedIssue)?.sub_issues.map(subIssue => (
                  <option key={subIssue} value={subIssue}>{subIssue}</option>
                ))}
              </select>
            </div>
          )}
          <div className="mt-4 flex justify-end gap-4">
          <button
              className="text-gray-500 hover:text-gray-700 ml-4 py-2 px-4 rounded border border-gray-300 focus:outline-none"
              onClick={handleBackToOrders}
            >
              Back to My Orders
            </button>
            <button
              className={`bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 text-white font-bold py-2 px-4 rounded ${!isContinueEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleContinue}
              disabled={!isContinueEnabled}
            >
              Continue
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
