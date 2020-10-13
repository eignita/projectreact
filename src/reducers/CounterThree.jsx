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

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
        <h5>Example of multiple useReducer </h5><h5>Count: {count}</h5>
      <ButtonGroup aria-label="countone group">
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
      <h5>CountTwo: {countTwo}</h5>
      <ButtonGroup aria-label="countTwo group">
        <Button variant="warning" onClick={() => dispatchTwo("decrement")}>
          Decrement
        </Button>
        <Button variant="secondary" onClick={() => dispatchTwo("reset")}>
          Reset
        </Button>
        <Button variant="success" onClick={() => dispatchTwo("increment")}>
          Increment
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default CounterThree;
