import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import AccountHeader from '../components/AccountHeader';
import { Inter } from 'next/font/google';
import RecommendedProductCard from '@/components/RecommendedProductCard';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });

const sampleData = [
    {
        id: 1,
        category: 'Beauty & Health',
        imageSrc: '/images/beauty1.jpg',
        brandName: 'Awesome Brand',
        productName: 'Cool Product 1',
        price: 100,
    },
    {
        id: 2,
        category: 'Home & Kitchen',
        imageSrc: '/images/homedecor.jpg',
        brandName: 'Great Brand',
        productName: 'Amazing Product 2',
        price: 1000,
    },
    {
        id: 3,
        category: 'Home & Kitchen',
        imageSrc: '/images/homedecor1.jpg',
        brandName: 'Superb Brand',
        productName: 'Fantastic Product 3',
        price: 400,
    },
    {
        id: 4,
        category: 'Clothing',
        imageSrc: '/images/sweater.jpg',
        brandName: 'Superb Brand',
        productName: 'Fantastic Product 4',
        price: 320,
    },
    {
        id: 5,
        category: 'Clothing',
        imageSrc: '/images/dress.jpg',
        brandName: 'Fashionable Brand',
        productName: 'Stylish Dress',
        price: 500,
    },
    {
        id: 6,
        category: 'Beauty & Health',
        imageSrc: '/images/skincare.jpg',
        brandName: 'Beauty Brand',
        productName: 'Skincare Product',
        price: 50,
    },
];

const username = "John Doe";

const Recommendations = () => {
    const router = useRouter();

    // const [showAll, setShowAll] = useState(false);

    // const itemsToShow = showAll ? sampleData.length : 4;

    const handleReturns = () => {
        router.push('/returns');
    };

    const handleBackToOrders = () => {
        router.push('/myOrders');
    };
    const handleRecommendations = () => {
        router.push('/allRecommendations');
    };
    return (
        <div className={`bg-white text-black flex flex-col min-h-screen w-1/2 ${inter.className}`}>
            <AccountHeader username={username} />
            <div className="flex flex-1 border-t">
                <Sidebar />
                <div className="flex-1 pt-4 ml-4">
                    <div className="w-full border-l pr-14">
                        <p className='ml-6 font-bold text-lg'>Recommendations</p>
                        <div className="flex flex-col gap-2 ml-6 pt-2 pb-20 relative">
                            {sampleData.slice(0, 4).map((item) => (
                                <RecommendedProductCard
                                    key={item.id}
                                    id={item.id}
                                    imageSrc={item.imageSrc}
                                    brandName={item.brandName}
                                    productName={item.productName}
                                    price={item.price}
                                />
                            ))}
                            {sampleData.length > 4 && (
                                <button
                                    className="hover:bg-gray-300 text-black font-small py-1 px-3 rounded mt-2 ml-auto text-sm"
                                    onClick={handleRecommendations}
                                    // style={{ position: 'absolute', bottom: '50px', right: '30px' }}
                                >
                                    Show More ...
                                </button>
                            )}
                            <div className='flex justify-center gap-10 flex-row-reverse'>
                                <button
                                    className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-8 rounded text-sm"
                                    onClick={handleReturns}
                                >
                                    Anyways Return
                                </button>
                                <button
                                    className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-8 rounded text-sm"
                                    onClick={handleBackToOrders}
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
