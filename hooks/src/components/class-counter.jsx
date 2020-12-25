import React, { Component } from 'react';
class ClassCounter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Tap It!!!!</button>
      </div>
    );
  }
}

export default ClassCounter;
