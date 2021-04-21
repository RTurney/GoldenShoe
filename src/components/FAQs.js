import React from 'react';
import Accordian from './Accordian';
import './FAQs.css'
function FAQs() {


    return (
        <div className='FAQ-page'>
            <h1>Frequently Asked Questions</h1>
            <p>Common Topics:</p>
            <Accordian 
                title='When will my shoes be delivered?'
                content='Lorem ipsum'
            />
            <Accordian 
                title='How do I return an item?'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor turpis urna, et sollicitudin justo blandit eget. Nam tincidunt nisl eu sem blandit, at iaculis massa ultrices. Aenean id enim ut dui varius iaculis eu ut felis. Donec vitae elit sit amet nunc consequat sodales. Proin facilisis ante est, ut ornare mauris consequat sit amet. Ut egestas, tortor ut imperdiet rhoncus, lectus lacus tristique tortor, in fringilla ipsum leo non eros. Morbi id arcu ac ante vestibulum dictum. Sed semper, purus nec suscipit convallis, nibh tortor blandit purus, sit amet feugiat enim erat a libero. Etiam non risus consectetur, porta tellus a, aliquet arcu.'
            />
            <Accordian
                title='How do I access my account?'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor turpis urna, et sollicitudin justo blandit eget. Nam tincidunt nisl eu sem blandit, at iaculis massa ultrices. Aenean id enim ut dui varius iaculis eu ut felis. Donec vitae elit sit amet nunc consequat sodales. Proin facilisis ante est, ut ornare mauris consequat sit amet. Ut egestas, tortor ut imperdiet rhoncus, lectus lacus tristique tortor, in fringilla ipsum leo non eros. Morbi id arcu ac ante vestibulum dictum. Sed semper, purus nec suscipit convallis, nibh tortor blandit purus, sit amet feugiat enim erat a libero. Etiam non risus consectetur, porta tellus a, aliquet arcu.'
            />
            
        </div>
    )
};

export default FAQs;