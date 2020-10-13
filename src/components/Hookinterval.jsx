import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import HookContext from "./HookContext";

function Hookinterval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
        setCount(count + 1);
      };  
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  },[count]);

  return (
    <div>
      <h3>
        Timer - <Badge variant="primary">{count}</Badge>
      </h3>
        <HookContext />
    </div>
  );
}

export default Hookinterval;
