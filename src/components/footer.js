import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <nav className="FooterItems">
                <div className='footer-links-container'>
                    <a href='/' className='footer-link'>Contact</a>
                    <a href='/' className='footer-link'>FAQs</a>
                    <a href='/' className='footer-link'>About us</a>
                </ div>
            </nav>
        )
    }
};

export default Footer;