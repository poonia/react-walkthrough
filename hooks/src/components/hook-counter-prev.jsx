import React, { useState } from 'react';

function HookCounterPrevComponent() {
  //Declaring State
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const handleIncrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>Hook Count Prev Value {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={handleIncrementByFive}>Increment By 5</button>
    </div>
  );
}
export default HookCounterPrevComponent;
