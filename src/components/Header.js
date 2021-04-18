import Navbar from './Navbar';
import SearchBar from './SearchBar';
import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='HeaderContainer'>
                <h1>Golden Shoe</h1>
                <Navbar />
                <SearchBar />
            </div>
        )
    }
}

export default Header;