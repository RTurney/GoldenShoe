import React from 'react';
import Form from './Form';
import './Contact.css'


function Contact() {

        return (
            <div>
                <h1 className='contact-header'>Contact us</h1>
                <p className='contact-message'>Let us know if you are having any issues or comments!</p>
                <Form />
            </div>
        )
}

export default Contact;