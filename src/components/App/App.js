import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div>
          <p>Enter a number and click up or down. The total will increase or decrease by that amount.</p>
          <button>Up</button>
          <input type="text" placeholder="Enter Number"/>
          <button>Down</button>
        </div>

        <div>
          <p>5</p>
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
