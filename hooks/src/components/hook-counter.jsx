import React, { useState } from 'react';

function HookCounterComponent() {
  //Declaring State
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hook Count Value {count}</h1>
      <button onClick={() => setCount(count + 1)}>Tapped Hook</button>
    </div>
  );
}
export default HookCounterComponent;
