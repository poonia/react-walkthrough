import React, { Component, Fragment } from 'react';

class Counter extends Component {
  render() {
    const { info, counterHandler, deleteHandler } = this.props;
    return (
      <Fragment>
        <tr key={info.name}>
          <td>{this.props.id}</td>
          <td>{info.name}</td>
          <td>${info.price}</td>
          <td>
            <div className="btn-group mr-3">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => counterHandler('add', info)}
              >
                +
              </button>
              <button
                type="button"
                className={`btn btn-sm btn-outline-secondary ${
                  info.count === 0 ? 'disabled' : ''
                }`}
                onClick={() => counterHandler('remove', info)}
              >
                -
              </button>
            </div>
          </td>
          <td>{info.count}</td>
          <td>${info.total}</td>
          <td>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => deleteHandler(info.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default Counter;
