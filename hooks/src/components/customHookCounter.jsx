import React from 'react';
import useCounter from '../hooks/useCounter';

function CustomHookCounter() {
  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <div>
      <h1>Custom Hook Implementation</h1>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default CustomHookCounter;
