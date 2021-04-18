import React, { Component } from 'react';
import './Searchbar.css'

class Searchbar extends Component {
    render() {
        return (
            <div className='searchbar-container'>
                <input 
                placeholder='search...'
                />
            </div>
        )
    }
}

export default Searchbar;