import React, { Component } from 'react';
import axios from 'axios';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  componentDidMount() {
    axios.get(`https://api.prashantranjan.com/get-data.php`).then((res) => {
      console.log('res', res);
      this.setState({ students: res.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
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
