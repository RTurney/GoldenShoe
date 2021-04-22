import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <nav className="FooterItems">
            <div className='footer-links-container'>
                <Link to='/contact' className='footer-link'>Contact Us</Link>
                <Link to='/FAQs' className='footer-link'>FAQs</Link>
                <Link to='/' className='footer-link'>About us</Link>
            </ div>
        </nav>
    )
};