import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <nav className="NavbarItems">
                <div className='navbar-links'>
                    <a href='/'>Categories</a>
                    <a href='/'>My Account</a>
                    <a href='/'>Help</a>
                    <a href='/'>Basket</a>
                </ div>
            </nav>
        )
    }
}

export default Navbar;