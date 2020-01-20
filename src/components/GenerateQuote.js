import React from 'react';
import './GenerateQuote.css';

const GenerateQuote =  ({ selectQuote }) => {
    return (
        <div className="GenerateQuote">
            <button onClick={ selectQuote }>Get quote</button>
        </div>
    );
};

export default GenerateQuote;