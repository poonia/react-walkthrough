import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DataFatchHookComponent() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.prashantranjan.com/get-data.php')
      .then((response) => {
        console.log(response.data);
        setRecords(response.data);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="py-5 text-center">
          <h2>All Student Details with Hooks useEffects</h2>
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
            {records.map((element, index) => (
              <tr key={index}>
                <th scope="row">{element.id}</th>
                <td>{element.name}</td>
                <td>{element.age}</td>
                <td>{element.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
export default DataFatchHookComponent;
