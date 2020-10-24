import React, { useState, useEffect } from "react";
import { Card, Badge } from "react-bootstrap";

function ItemDetails({ match }) {
  const [item, setItemDetail] = useState({
      images: {}
  });

  useEffect(() => {
    const id = match.params.id;
    const fetchItem = async () => {
      const data = await fetch(
        `https://fortnite-api.theapinetwork.com/item/get?id=${id}`
      );
      const itemDetail = await data.json();
      setItemDetail(itemDetail.data.item);
      console.log(itemDetail.data.item);
    };
    fetchItem();
  }, [match.params.id]);

  return (
    <div>
      <h1>ItemDetails page</h1>
      <Card style={{ width: "25rem" }} key={item.itemId}>
      <Card.Img variant="top" src={item.images.background} />
        <Card.Body>
          <Card.Title>
            {item.name}
            <h5>
              <Badge variant="primary">{item.type}</Badge>
            </h5>
          </Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetails;
