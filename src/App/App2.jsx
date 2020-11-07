import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import CounterOne from "./reducers/CounterOne";
import CounterTwo from "./reducers/CounterTwo";
import CounterThree from "./reducers/CounterThree";

export const NameContext = React.createContext();
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <CounterOne />
        </Col>
      </Row>
      <Row>
        <Col>
          <CounterTwo />
        </Col>
      </Row>
      <Row>
        <Col>
          <CounterThree />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
