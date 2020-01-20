import React, { Component } from "react";
import './App.css';
import GenerateQuote from './components/GenerateQuote';
import DisplayQuote from './components/DisplayQuote';

const sampleQuote = {
  quote: 'This is a quote!',
  character: 'Someone',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
  characterDirection : "Left"
};

// fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
//   .then(results => results.json())
//   .then(data => { 
//     console.log(data[0].quote);
// });

class App extends Component {
  constructor(){
    super();
    this.state = {
      quote: sampleQuote
    };
  } 

  getQuote() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data[0]
        });
      });
  } 

  render(){ 
    return (
      <div className="App">
        <GenerateQuote selectQuote ={() =>  this.getQuote()}/>
        <br />
        <DisplayQuote quote={this.state.quote}/>
      </div>
    );
  } 
}

export default App;
