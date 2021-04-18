import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <nav className="NavbarItems">
                <ul className='navbar-links'>
                    <li><a href='/'>Categories</a></li>
                    <li><a href='/'>My Account</a></li>
                    <li><a href='/'>Help</a></li>
                    <li><a href='/'>Basket</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;