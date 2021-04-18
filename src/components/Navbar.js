import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <nav className="NavbarItems">
                <ul className='navbar-links'>
                    <li>Categories</li>
                    <li>My account</li>
                    <li>Help</li>
                    <li>Basket</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;