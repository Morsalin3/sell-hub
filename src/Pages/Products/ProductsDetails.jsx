import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsDetails = () => {
    const {_id, category, title, price, description, image } = useLoaderData();

  
    return (
    <div className='my-8 grid gap-4 grid-cols w-2/4 m-auto'>
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title line-clamp-1">{title}</h2>
            <h3 className='font-medium'>{category}</h3>
            <p className=''>{description}</p>
            <div className="mt-6 flex border-t-2 pt-6">
                                <span className="title-font font-bold text-2xl text-blue-600">${(price - (0.02 * price)).toFixed(2)}</span>
                                <button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">Buy</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 hover:bg-blue-400 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-white ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
            </div>
            </div>
</div>

    );
};

export default ProductsDetails;