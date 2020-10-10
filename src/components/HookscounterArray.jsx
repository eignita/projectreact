import React, { useState } from "react";

function HookscounterArray() {
  const [items, setItems] = useState([]);
  const additem = () => {
      setItems([...items, {
          id: items.length,
          value: Math.floor(Math.random() * 10) + 1
      }])
  }

  return (
    <div className="HookscounterArray">
    <button onClick={additem}>Add an item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.value} </li>
        ))}
      </ul>
    </div>
  );
}

export default HookscounterArray;
