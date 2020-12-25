import React, { Component } from 'react';
import withCounter from './withCounter';
class ClickCounterSecond extends Component {
  render() {
    const { count, onIncrement } = this.props;
    return (
      <button onClick={onIncrement} className="btn btn-warning m-2">
        Second Counter Tapped times : {count}
      </button>
    );
  }
}

export default withCounter(ClickCounterSecond);
