import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert, Button, Spinner } from "react-bootstrap";

function FetchData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [id, setId] = useState(1);
  const [idfrombutton, setIdfromButton] = useState(1);
  const [post, setPost] = useState([]);
  const handlePost = () => {
    setIdfromButton(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setPost({});
      });
  }, [idfrombutton]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <Button variant="warning" onClick={handlePost}>
        Fetch Post
      </Button>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        !error && <Alert variant="success">{post.title}</Alert>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
}

export default FetchData;
