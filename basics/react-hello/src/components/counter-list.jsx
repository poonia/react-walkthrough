import React, { Component } from 'react';
import Counter from './counter';

class CounterList extends Component {
  render() {
    const { data, counterHandler, deleteHandler } = this.props;
    return (
      <React.Fragment>
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
              <th scope="col">Item</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.framework.map((element, index) => (
              <Counter
                key={index + 1}
                info={element}
                id={index + 1}
                deleteHandler={deleteHandler}
                counterHandler={counterHandler}
              ></Counter>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5">Total Amount to Pay</td>
              <td>${data.total}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </React.Fragment>
    );
  }
}

export default CounterList;
