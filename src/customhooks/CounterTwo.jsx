import React from "react";
import useCounterTwo from "./useCounterTwo";

function CounterTwo() {
  const [count, dispatch] = useCounterTwo(0);

  return (
    <div>
      <h4>Custom hook with useReducer Count {count} </h4>
      <button onClick={() => dispatch({type: "increment"})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
}

export default CounterTwo;