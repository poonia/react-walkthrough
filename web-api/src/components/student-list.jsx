import React, { Component } from 'react';
import axios from 'axios';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  componentDidMount() {
    axios
      .get(`https://api.prashantranjan.com/get-data.php`)
      .then((res) => {
        console.log('res', res);
        this.setState({ students: res.data.reverse() });
      })
      .catch((error) => {
        console.log('error ->', error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-5 text-center">
          <h2>All Student Details</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ad
            praesentium eveniet vel assumenda aspernatur quia ab unde doloribus,
            saepe reiciendis in quae cum quos corrupti dicta veniam eum
            mollitia?
          </p>
        </div>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((element, index) => (
              <tr key={index}>
                <th scope="row">{element.id}</th>
                <td>{element.name}</td>
                <td>{element.age}</td>
                <td>{element.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default StudentList;
