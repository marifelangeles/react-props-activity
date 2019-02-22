import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  state = {
    total: {
      number: 5
    },
    history: {
      number: [ 8, 3, 7]
    },
  }

  // handle change for total 
  handleChange = (event) => {
    console.log('in handleChange');
    this.setState({
      total: {
        number: Number(event.target.value)    // event turn number to string
      },    
    });
  }

  // when 'UP' is clicked, increase total by 1
  handleUpClick = () => {
    console.log('UP clicked');
    this.setState({
      total: {
        number: this.state.total.number + 1
      },
    });
  }

  // when 'DOWN' is clicked, decrease total by 1
  handleDownClick = () => {
    console.log('DOWN clicked');
    this.setState({
      total: {
        number: this.state.total.number - 1
      },
    });
  }

  // save current total and add to history
  handleSaveClick = () => {
    console.log('in handleSaveClick');
    
  }


  render() {
    return (
      <div>
        <Header />

        <div>
          <p>Enter a number and click up or down. The total will increase or decrease by that amount.</p>
          <button onClick={this.handleUpClick}>Up</button>
          <input type="number" placeholder="Enter Number" value={this.state.total.number} onChange={this.handleChange}/>
          <button onClick={this.handleDownClick}>Down</button>
        </div>

        <div>
          <p>{this.state.total.number}</p>
          <button>Save</button>
          <p>Click save above to save the current total in the history</p>
        </div>

        <div>
          <h2>History</h2>
          <ul>
            <li>5</li>
          </ul>
        </div>
        
      </div>
    );
  }
}

export default App;
