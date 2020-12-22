import React, { Component } from 'react';

class NoResult extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="alert alert-danger" role="alert">
          No data found!!
        </div>
      </React.Fragment>
    );
  }
}

export default NoResult;
