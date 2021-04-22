import React from 'react';
import './Mainpage.css';

export default function Mainpage() {
    return (
        <div className='mainpage-container'>
            <div className='buttons-container'>
                <div className='mens-link'>
                    <button>Mens</button>
                </div>
                <div className='womens-link'>
                    <button>Womens</button>
                </div>
            </div>
        </div>
    )
};
