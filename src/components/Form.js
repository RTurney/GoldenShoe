import React, { useState } from 'react';
import { send } from 'emailjs-com'
import './Form.css'

function Form() {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });
    
    const [confirmation, setConfirmation] = useState('Let us know if you are having any issues or comments!')

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_tg7tz8w',
            'template_ljkpvb3',
            toSend,
            'user_kG0rZISAzHS5cBDjbcckM'
    )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setConfirmation('Message Sent! A member of our team will get back to you as soon as possible.');
            setToSend({ from_name: '', message: '', reply_to: ''})
        })
        .catch((err) => {
            console.log('FAILED...', err);
            setConfirmation('Error, message not sent. Please ensure all fields are filled correctly and try again.');
        });
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={onSubmit}>
                <p className='confirmation-message'>{confirmation}</p>
                <input
                    className='name-input'
                    type='text'
                    name='from_name'
                    placeholder='Your name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    required={true}
                />
                <br />
                <input
                    className='email-input'
                    type='email'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    required={true}
                />
                <br />
                <textarea
                    className='message-input'
                    type='text'
                    name='message'
                    placeholder='Your message...'
                    value={toSend.message}
                    onChange={handleChange}
                    required={true}
                />
                <br />
                <button className='contact-submit-button' type='submit'>Submit</ button>
                </ form>
    )
}

export default Form;