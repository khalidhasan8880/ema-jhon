import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([])
    const [cart, setCart] = useState({})
useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

function addCartHandle(id) {
    console.log(id);
}
console.log(products);
    return (
        <div className='shop '>
            <div className='flex justify-center align-middle flex-wrap gap-5'>
                {
                    products.map(product=><Card key={product.id} addCartHandle={addCartHandle} product={product}></Card>)
                }
            </div>
            <div className='side w-10/2'>
                <h1>hello from : </h1>
            </div>
        </div>
    );
};

export default Shop;