import React from 'react';

const Card = (props) => {
    const {name,ratings,price, seller, id, img } = props.product
    function addCart(id) {
        console.log(id);
    }


    return (
        <div className="card pb-0 w-96 bg-red-400 shadow-xl">
            <figure className="px-4 pt-4">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body pb-0 mx-0 px-0 flex flex-col justify-between">
                <div className='px-4'>
                    <h2 className="card-title">{name}</h2>
                    <h3 className="card-title">Price : ${price}</h3>
                </div>

                <div>
                    <div className='px-4 py-1'>
                        <p>Manufacturer : {seller}</p>
                        <p>Rating : {ratings} star</p>
                    </div>
                    <div  className=' border-t-2 p-2 border-black w-full text-center align-text-bottom' onClick={()=>addCart(id)}>
                        add to cart
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;