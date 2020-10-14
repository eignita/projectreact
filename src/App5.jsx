import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Hookcallback from "./callback/Hookcallback";
import Hookmemo from "./memo/Hookmemo";
import FocusInput from "./ref/FocusInput";
import HookTimer from "./ref/HookTimer";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Hookcallback />
        </Col>
      </Row>
      <Row>
        <Col>
          <Hookmemo />
        </Col>
      </Row>
      <Row>
        <FocusInput />
      </Row>
      <Row>
        <HookTimer />
      </Row>
    </Container>
  );
}

export default App;
