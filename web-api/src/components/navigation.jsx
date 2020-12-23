import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Navigation = (props) => {
  return (
    <Fragment>
      <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <p className="h5 my-0 mr-md-auto fw-normal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-badge mb-1"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 2.5A2.5 2.5 0 0 1 4.5 0h7A2.5 2.5 0 0 1 14 2.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2.5zM4.5 1A1.5 1.5 0 0 0 3 2.5v10.795a4.2 4.2 0 0 1 .776-.492C4.608 12.387 5.937 12 8 12s3.392.387 4.224.803a4.2 4.2 0 0 1 .776.492V2.5A1.5 1.5 0 0 0 11.5 1h-7z"
            />
            <path
              fill-rule="evenodd"
              d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          &nbsp; Student Info
        </p>
        <nav className="my-2 my-md-0 me-md-3">
          <Link className="p-2 text-dark" to="/list">
            Student Records
          </Link>
          <Link className="p-2 text-dark" to="/add">
            Add Student
          </Link>

          <Link className="p-2 text-dark" to="/comments">
            Comments
          </Link>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navigation;
