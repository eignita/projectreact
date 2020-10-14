import React, { useState, useEffect, useRef } from "react";
import { Badge, Button } from "react-bootstrap";
function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevtimer) => prevtimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <h3>
      <Badge variant="secondary">Hook timer - {timer}</Badge>
      <Button
        variant="primary"
        onClick={() => clearInterval(intervalRef.current)}
      >
        Clear Timer
      </Button>
    </h3>
  );
}

export default HookTimer;
