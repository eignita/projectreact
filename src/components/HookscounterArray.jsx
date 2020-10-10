import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

function HookscounterArray() {
  const [items, setItems] = useState([]);
  const additem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <h3>useState - array</h3>
      <Button variant="primary" onClick={additem}>
        Add an item
      </Button>{" "}
      <ListGroup variant="flush">
        {items.map((item) => (
          <ListGroup.Item key={item.id}>{item.value}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default HookscounterArray;
