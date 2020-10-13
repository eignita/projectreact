import React, { useContext } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { CountContext } from "../App";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h5>ComponentD: {countContext.countState}</h5>
      <ButtonGroup aria-label="counter group">
        <Button
          variant="warning"
          onClick={() => countContext.countDispatch("decrement")}
        >
          Decrement
        </Button>
        <Button
          variant="secondary"
          onClick={() => countContext.countDispatch("reset")}
        >
          Reset
        </Button>
        <Button
          variant="success"
          onClick={() => countContext.countDispatch("increment")}
        >
          Increment
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default ComponentD;
