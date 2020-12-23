import React, { Component } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';

class Comments extends Component {
  state = {
    records: [],
    // Added property for the pagination
    recordsPerPage: 10,
    currentPage: 1,
  };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({ currentPage: Number(e.target.id) });
  };

  componentDidMount() {
    let urlToFetch = 'https://jsonplaceholder.typicode.com/comments';

    axios
      .get(urlToFetch)
      .then((response) => {
        const data = response.data.slice(0, 100);
        this.setState({ records: data });
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  render() {
    //Object Destructure
    const { records, recordsPerPage, currentPage } = this.state;

    //Finding Last Page Index + First Records Index
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentPages = records.slice(indexOfFirstRecord, indexOfLastRecord);

    //Rendering Pages
    const renderPages = currentPages.map((rec) => (
      <tr key={rec.id}>
        <td>{rec.id}</td>
        <td>{rec.name}</td>
        <td>{rec.email}</td>
        <td>{rec.body}</td>
      </tr>
    ));

    //Number of Pages
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(records.length / recordsPerPage); i++) {
      pageNumbers.push(i);
    }

    //Display Pagination Page Numbers
    const renderPageNumber = pageNumbers.map((number) => {
      return (
        <li
          className={
            number === this.state.currentPage ? 'page-item active' : 'page-item'
          }
          key={number}
        >
          <a id={number} onClick={this.handleClick} className="page-link">
            {number}
          </a>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="py-5 text-center">
          <h2>All Student Comments</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ad
            praesentium eveniet vel assumenda aspernatur quia ab unde doloribus,
            saepe reiciendis in quae cum quos corrupti dicta veniam eum
            mollitia?
          </p>
        </div>
        <table className="table">
          <thead>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Comment</th>
          </thead>
          <tbody>{renderPages}</tbody>
        </table>
        <div className="container mt-5 text-center">
          <ul className="pagination">{renderPageNumber}</ul>
        </div>
      </div>
    );
  }
}

export default Comments;
