import React, { useState, useEffect } from "react";
import { Button, Badge, FormControl } from "react-bootstrap";

function HookeffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("update doc title");
  }, [count]);
  return (
    <div>
      <h4>
        useEffect - runs after every render of component, Conditionally render
        based on array of props or state changes (check 2nd parameter in useEffect)
      </h4>
      <FormControl
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></FormControl>{" "}
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Clicked <Badge variant="light">{count}</Badge>
      </Button>
    </div>
  );
}

export default HookeffectOne;
