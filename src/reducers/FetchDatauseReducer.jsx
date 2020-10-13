import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "react-bootstrap";

function FetchDatauseReducer() {
  const initialState = {
    loading: true,
    error: "",
    post: {},
  };

  const reducer = (currentState, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          post: action.payload,
          error: "",
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          post: {},
          error: action.payload,
        };
      default:
        return currentState;
    }
  };
  const [currentState, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/1`
      )
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }, []);

  return (
    <div>
      {currentState.loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        !currentState.error && (
          <Alert variant="success">{currentState.post.title}</Alert>
        )
      )}
      {currentState.error && (
        <Alert variant="danger">{currentState.error}</Alert>
      )}
    </div>
  );
}

export default FetchDatauseReducer;
