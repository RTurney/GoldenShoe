import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <nav className="FooterItems">
                <div className='footer-links'>
                    <a href='/'>Contact</a>
                    <a href='/'>FAQs</a>
                    <a href='/'>About us</a>
                </ div>
            </nav>
        )
    }
};

export default Footer;