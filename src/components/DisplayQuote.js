import React from 'react';
import './DisplayQuote.css';

const DisplayQuote =  ({ quote }) => {
    return (
        <div className="DisplayQuote">
            <img id="image" src={ quote.image } alt="picture of someone of simpsons"/>
            <ul>
                <li>Character: {quote.character}</li>
                <li>Character Direction: {quote.characterDirection} </li>
                <li>Quote: {quote.quote} </li>
            </ul>
        </div>
    );
};

export default DisplayQuote;