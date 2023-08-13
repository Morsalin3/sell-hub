import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsCards from './ProductsCards';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/products')
        .then(res =>{
            setProducts(res.data);
        })
        .catch(error =>{
            console.error('fetching error products', error)
        });
    },[])

    console.log(products)

    return (
        <section className='my-8'>
            <h2 className='text-3xl font-bold mx-5 my-5'>Our Products</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                {
                    products.slice(0,3).map(product => <ProductsCards
                    key={product._id}
                    product={product}
                    ></ProductsCards>)
                }
                
             
            </div>
               
        </section>
    );
};

export default Products;