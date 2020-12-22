import React, { Component } from 'react';
import CounterList from './components/counter-list';
import Navigation from './components/navigation';
import NoResult from './components/no-result';

class App extends Component {
  constructor() {
    super();
    console.log('hello from app');
  }

  state = {
    count: 3,
    total: 320,
    framework: [
      { id: 1, name: 'Angular', price: 100, count: 0, total: 0 },
      { id: 2, name: 'React', price: 120, count: 2, total: 240 },
      { id: 3, name: 'Vue', price: 80, count: 1, total: 80 },
      { id: 4, name: 'Knockout', price: 70, count: 0, total: 0 },
      { id: 5, name: 'Node', price: 150, count: 0, total: 0 },
    ],
  };

  // delete record handler
  deleteHandler = (id) => {
    let filtered = this.state.framework.filter(function (value) {
      return value.id !== id;
    });
    this.setState({ total: this.getTotalCount(filtered, 'total') });
    this.setState({ count: this.getTotalCount(filtered, 'count') });
    this.setState({ framework: filtered });
  };

  // reset handler
  handleReset = () => {
    let reset = this.state.framework.map(function (value) {
      value.count = 0;
      value.total = 0;
      return value;
    });
    this.setState({ count: 0 });
    this.setState({ total: this.getTotalCount(this.state.framework, 'total') });
    this.setState({ framework: reset });
  };

  // item counter handler
  counterHandler = (type, item) => {
    let frameworks = [...this.state.framework];
    let index = frameworks.indexOf(item);
    if (type === 'add') {
      frameworks[index].count++;
    } else {
      if (frameworks[index].count > 0) {
        frameworks[index].count--;
      }
    }
    frameworks[index].total =
      frameworks[index].count === 0
        ? 0
        : frameworks[index].price * frameworks[index].count;

    let total = this.getTotalCount(frameworks, 'total');
    let count = this.getTotalCount(frameworks, 'count');

    this.setState({ total: total });
    this.setState({ count: count });
    this.setState({ framework: frameworks });
  };

  // accumulator handler for total and count
  getTotalCount = (frameworks, type) => {
    return frameworks.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue[type];
    }, 0);
  };

  render() {
    return (
      <React.Fragment>
        {/* Navigation */}
        <Navigation
          data={this.state}
          resetHandler={this.handleReset}
          getBadgeClassHandler={this.getBadgeClasses}
        />
        {/* Container */}
        <div className="container mt-5">
          {this.state.framework.length === 0 ? (
            // No Results
            <NoResult />
          ) : (
            // Counter-list
            <CounterList
              data={this.state}
              deleteHandler={this.deleteHandler}
              counterHandler={this.counterHandler}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
