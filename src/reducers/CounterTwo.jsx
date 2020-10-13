import React, { useReducer } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "increment2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h5>Example of complex json object useReducer Count:</h5>
      <h5> {count.firstCounter}</h5>
      <h5> {count.secondCounter}</h5>
      <ButtonToolbar aria-label="counter toolbar">
        <ButtonGroup aria-label="decrement group" className="mr-2">
          <Button
            variant="warning"
            onClick={() => dispatch({ type: "decrement", value: 1 })}
          >
            Decrement
          </Button>
          <Button
            variant="warning"
            onClick={() => dispatch({ type: "decrement2", value: 2 })}
          >
            Decrement2
          </Button>
          <Button
            variant="warning"
            onClick={() => dispatch({ type: "decrement", value: 5 })}
          >
            Decrement 5
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="increment group" className="mr-2">
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </Button>
          <Button
            variant="success"
            onClick={() => dispatch({ type: "increment", value: 1 })}
          >
            Increment
          </Button>
          <Button
            variant="success"
            onClick={() => dispatch({ type: "increment2", value: 2 })}
          >
            Increment2
          </Button>
          <Button
            variant="success"
            onClick={() => dispatch({ type: "increment", value: 5 })}
          >
            Increment 5
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default CounterTwo;
