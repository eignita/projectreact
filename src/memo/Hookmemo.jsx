import React, { useState, useCallback } from "react";
import { Alert, Button, Toast } from "react-bootstrap";
function Hookmemo() {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);
  const IncrementOne = () => {
    setcounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

//   const IsEven = useMemo(() => {
//     return counterOne % 2 === 0;
//   }, [counterOne]);

  const IsEven = useCallback(() => {
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <Toast.Header>
      <Toast.Header>
        <h4 className="mr-auto">useMemo is used to cached result of invoke function </h4>
        <h4 className="mr-auto">useCallback is used to cache function </h4>
      </Toast.Header>
      <Toast.Body>
        <Button variant="warning" onClick={IncrementOne}>
          CounterOne - {counterOne}
        </Button>
        <small>
          {IsEven() ? (
            <Alert variant="primary">Even</Alert>
          ) : (
            <Alert variant="secondary">Odd</Alert>
          )}
        </small>
        <Button variant="warning" onClick={IncrementTwo}>
          CounterTwo - {counterTwo}
        </Button>
      </Toast.Body>
    </Toast.Header>
  );
}

export default Hookmemo;
