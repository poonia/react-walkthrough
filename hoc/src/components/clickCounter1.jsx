import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounterFirst extends Component {
  render() {
    const { count, onIncrement } = this.props;

    return (
      <button onClick={onIncrement} className="btn btn-success">
        First Counter Tapped times : {count}
      </button>
    );
  }
}

export default withCounter(ClickCounterFirst);
