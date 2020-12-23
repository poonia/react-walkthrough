import React, { Component } from 'react';
import axios from 'axios';

class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      address: '',
    };
  }

  addStudentHandler(e) {
    e.preventDefault();
    axios
      .post('https://api.prashantranjan.com/add-data.php', this.state)
      .then(() => {
        console.log('Post successful!');
      })
      .catch(() => {
        console.log('Oops, request failed!');
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-5 text-center">
          <h2>Add Student Details</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ad
            praesentium eveniet vel assumenda aspernatur quia ab unde doloribus,
            saepe reiciendis in quae cum quos corrupti dicta veniam eum
            mollitia?
          </p>
        </div>
        <form className="row g-3">
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="col-12 mt-2">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="20"
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
            />
          </div>
          <div className="col-12 mt-2">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Apartment, studio, or floor"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <div className="col-12 mt-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => {
                this.addStudentHandler(e);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddStudent;
