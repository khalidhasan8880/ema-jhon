import React from 'react';
import './Header.css'
import image from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className="navbar w-full rounded-none px-24 bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl"><img src={image} alt="" /></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className=' hover:text-primary  fistchild'><a>Order</a></li>
                    <li className=' hover:text-primary'><a>Order Review</a></li>
                    <li className=' hover:text-primary'><a>Manage Inventory</a></li>
                    <li className=' hover:text-primary'><a>Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;