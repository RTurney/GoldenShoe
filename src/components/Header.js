import Navbar from './Navbar';
import SearchBar from './SearchBar';
import React, { Component } from 'react';
import logo from './GoldenShoe.png';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='HeaderContainer'>
                <div className='logo-section'>
                    <Link to='/'>
                        <img src={logo} alt='Golden Shoe' className='logo'/>
                    </Link>
                </div>
                <Navbar />
                <SearchBar />
            </div>
        )
    }
};

export default Header;