import Navbar from './Navbar';
import SearchBar from './SearchBar';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
            <h1>Golden Shoe</h1>
            <Navbar />
            <SearchBar />
            </div>
        )
    }
}

export default Header;