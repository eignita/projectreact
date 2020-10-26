import React, { useState, useEffect } from "react";
import {axios} from "axios";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function UpcomingItems() {
  const [items, setItems] = useState([
    {
      itemId: "",
      item: {
        images: {},
      },
    },
  ]);

  useEffect(() => {
    axios
      .get(`https://fortnite-api.theapinetwork.com/upcoming/get`)
      .then((res) => {
        console.log(res.data.data);
        setItems(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Upcoming Items</h1>
      {items.map((item) => (
        <Card style={{ width: "25rem" }} key={item.itemId}>
          <Card.Img variant="top" src={item.item.images.icon} />
          <Card.Body>
            <Card.Title>
              <Link to={`/ItemDetails/${item.itemId}`} style={{ cursor: true }}>
                {item.item.name}
              </Link>
              <h5>
                <Badge variant="primary">{item.item.type}</Badge>
              </h5>
            </Card.Title>
            <Card.Text>{item.item.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default UpcomingItems;
