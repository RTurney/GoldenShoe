import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render () {
        return (
            <nav className="NavbarItems">
                <div className='navbar-links'>
                    <Link to='/contact'>Categories</Link>
                    <Link to='/'>My Account</Link>
                    <Link to='/'>Help</Link>
                    <Link to='/'>Basket</Link>
                </ div>
            </nav>
        )
    }
}

export default Navbar;