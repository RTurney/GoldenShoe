import Navbar from './Navbar';
import SearchBar from './SearchBar';
import React from 'react';
import logo from '../assets/GoldenShoe.png';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
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
};