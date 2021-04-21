import React from 'react';
import Accordian from './Accordian';

function FAQs() {


    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <p>Common Topics:</p>
            <Accordian 
                title='When will my shoes be delivered?'
                content='Lorem ipsum'
            />
            
        </div>
    )
};

export default FAQs;