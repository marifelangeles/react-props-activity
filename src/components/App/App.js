import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  state = {
    total: 5,
    history: [ 8, 3, 7],
  }

  // handle change for total 
  handleChange = (event) => {
    console.log('in handleChange');
    this.setState({
      total: event.target.value,
    });
  }


  render() {
    return (
      <div>
        <Header />

        <div>
          <p>Enter a number and click up or down. The total will increase or decrease by that amount.</p>
          <button>Up</button>
          <input type="number" placeholder="Enter Number"  onChange={this.handleChange}/>
          <button>Down</button>
        </div>

        <div>
          <p>{this.state.total}</p>
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
