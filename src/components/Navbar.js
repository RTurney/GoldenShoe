import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {   
    return (
            <nav className="NavbarItems">
                <div className='navbar-links'>
                    <Link to='/' className='navbar-buttons'>Categories</Link>
                    <Link to='/' className='navbar-buttons'>My Account</Link>
                    <Link to='/' className='navbar-buttons'>Help</Link>
                    <Link to='/' className='navbar-buttons'>Basket</Link>
                </ div>
            </nav>
        )
};
