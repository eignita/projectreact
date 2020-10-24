import React from "react";
import useCounterOne from "./useCounterOne";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounterOne(0);

  return (
    <div>
      <h4>Custom hook with useState Count {count} </h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
