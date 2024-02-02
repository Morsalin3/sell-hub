import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';

const CardsItems = ({ card, refetch }) => {

    const { _id, productName, category, image, price } = card;

    const deleteCard=(id) =>{
        axios
        .delete(`https://sell-hub-server.vercel.app/cards/${id}`)
        .then((res) => {
            const data = res.data;
            if (data.deletedCount > 0) {
                refetch();
                toast.success('Card Item Removed');
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
           <div className='w-48'>
           <figure><img src={image} alt="Movie" className='w-96'/></figure>
           </div>
            <div className="card-body">
                <h2 className="card-title line-clamp-1">{productName}</h2>
                <h3 className='font-medium'>{category}</h3>
                <div className="mt-6 flex border-t-2 pt-6">
                    <span className="title-font font-bold text-2xl text-blue-600">${price}</span>
                    <button onClick={()=> deleteCard(_id)} className="flex ml-2 text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded">Delete</button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 hover:bg-blue-400 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-white ml-4">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardsItems;