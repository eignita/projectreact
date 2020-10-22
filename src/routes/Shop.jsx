import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
function Shop() {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    console.log(items);
    setItems(items.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div>
      <h1>Shop page</h1>

      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          {items.map((item) => (
            <Link to={`/shop/${item.itemId}`} key={item.itemId}>
              <ListGroup.Item>{item.item.name}</ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default Shop;
