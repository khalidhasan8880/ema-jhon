import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([])
useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

console.log(products);
    return (
        <div className='shop '>
            <div className='flex justify-center align-middle flex-wrap gap-5'>
                {
                    products.map(product=><Card key={product.id} product={product}></Card>)
                }
            </div>
            <div className='side w-10/2'>
                side
            </div>
        </div>
    );
};

export default Shop;