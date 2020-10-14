import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import FetchData from './reducers/FetchData';
import FetchDatauseReducer from "./reducers/FetchDatauseReducer";

function App() {
  return (
    <Container>
      <Row>
        <Col>
            <FetchData />
        </Col>
      </Row>
      <Row>
        <Col>
            <FetchDatauseReducer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
