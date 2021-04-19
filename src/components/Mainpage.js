import React, { Component } from 'react';
import './Mainpage.css'

class Mainpage extends Component {
    render () {
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
    }
}

export default Mainpage;