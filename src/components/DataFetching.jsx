import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Alert, Button } from "react-bootstrap";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idfrombutton, setIdFromButton] = useState(1);
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then((res) => {
        console.log("Second empty array param just call api once.");
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    setIdFromButton(id);
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idfrombutton]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
        <Button variant="primary" onClick={handleClick} type="button">Fetch Post</Button>
      <Alert variant="success">{post.title}</Alert>
      {posts.map((post) => (
        <Card key={post.id}>
          <Card.Header>{post.title}</Card.Header>
          <Card.Body>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default DataFetching;
