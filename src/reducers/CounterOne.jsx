import React, { useReducer } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h5>Example of simple useReducer Count: {count}</h5>
      <ButtonGroup aria-label="counter group">
        <Button variant="warning" onClick={() => dispatch("decrement")}>
          Decrement
        </Button>
        <Button variant="secondary" onClick={() => dispatch("reset")}>
          Reset
        </Button>
        <Button variant="success" onClick={() => dispatch("increment")}>
          Increment
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default CounterOne;
