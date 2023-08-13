import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCards = ({product}) => {
    const {_id, title, Price, description, category, image} = product;

    const handleCard = () => {
        // const cartData = {
        //     productId: id,
        //     category,
        //     productName: title,
        //     image,
        //     price
        // }
    }
    return (
    <div className=' '>
        <div className="card card-compact rounded-xl shadow-xl">
            <figure><img src={image} alt="Phones" className='w-28 h-32' /></figure>
            

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-base font-medium'>{category}</p>
    
                <div className="mt-2 flex justify-between items-center flex-wrap">
                    <Link
                        to={`/products/${_id}`}
                        className=''>
                        <button type="button" className="px-6 py-2 font-semibold border border-black rounded hover:text-white hover:bg-blue-600 hover:border-blue-600">Show Details</button>
                    </Link>
                    <button
                        onClick={() => handleCard(_id)}
                        className="hover:bg-blue-500 hover:text-white rounded-full p-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </button>
            </div>
            </div>
        </div>
    </div>
    );
};

export default ProductsCards;