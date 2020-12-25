import React, { Component } from 'react';
import ClickCounterFirst from './components/clickCounter1';
import ClickCounterSecond from './components/clickCounter2';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>HOC Component Implementation</h1>
        </div>
        <div className="row">
          <div className="col-auto">
            <ClickCounterFirst />
            <ClickCounterSecond />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
