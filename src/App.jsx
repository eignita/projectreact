import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import DocTitle from './customhooks/DocTitle';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <DocTitle />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
