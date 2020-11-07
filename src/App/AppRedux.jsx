import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counterreducer);
  const islogged = useSelector((state) => state.loggedreducer);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col>
          <h1> Learn Redux </h1>
          {islogged ? (
            <div>
              <h4>logged in user</h4>{" "}
              <button onClick={() => dispatch({ type: "login" })}>
                Log Out
              </button>
            </div>
          ) : (
            <button onClick={() => dispatch({ type: "login" })}>Log In</button>
          )}

          <div> Counter: {counter}</div>
          <button onClick={() => dispatch({ type: "increment" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrement
          </button>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
