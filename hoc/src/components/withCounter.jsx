import React from 'react';

const withCounter = (WrappedComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          onIncrement={this.handleIncrement}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
