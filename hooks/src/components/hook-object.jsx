import React, { useState } from 'react';

function HookObjectComponent() {
  //Declaring State
  const initial = { firstName: 'Praveen', lastName: 'Poonia' };
  const [name, setName] = useState(initial);

  const updateDetail = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Hook Object</h1>
      <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={updateDetail}
      />
      <input
        type="text"
        name="lastName"
        value={name.lastName}
        onChange={updateDetail}
      />
      <p>
        {name.firstName} {name.lastName}
      </p>
    </div>
  );
}
export default HookObjectComponent;
