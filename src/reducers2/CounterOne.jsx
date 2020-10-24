import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return action.value;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <div>Count: {count}</div>
      <button onClick={() => dispatch({type: "increment", value: 2})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement", value: 2})}>Decrement</button>
      <button onClick={() => dispatch({type: "reset", value: initialState})}>Reset</button>
    </div>
  );
}

export default CounterOne;
