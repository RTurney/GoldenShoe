import React, { Component } from 'react';
import './Footer.css'
import {Link, withRouter } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <nav className="FooterItems">
                <div className='footer-links-container'>
                    <Link href='/contact' className='footer-link'>Contact</Link>
                    <Link href='/' className='footer-link'>FAQs</Link>
                    <Link href='/' className='footer-link'>About us</Link>
                </ div>
            </nav>
        )
    }
};

export default Footer;