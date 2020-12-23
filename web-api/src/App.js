import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './components/navigation';
// import NoResult from './components/no-result';
import StudentList from './components/student-list';
import AddStudent from './components/add-student';
import Comments from './components/comments';

class App extends Component {
  constructor() {
    super();
    console.log('hello from app');
  }

  state = {};

  render() {
    return (
      <Router>
        {/* Navigation */}
        <Navigation data={this.state} />
        {/* Container */}
        <div className="container mt-5">
          <Switch>
            <Route path="/list">
              <StudentList />
            </Route>
            <Route path="/add">
              <AddStudent />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route>
          </Switch>

          {/* {this.state.framework.length === 0 ? (
            // No Results
            <NoResult />
          ) : (
            // Counter-list
            <CounterList
              data={this.state}
              deleteHandler={this.deleteHandler}
              counterHandler={this.counterHandler}
            />
          )} */}
        </div>
      </Router>
    );
  }
}

export default App;
