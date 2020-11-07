import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Hookinterval from "./components/Hookinterval";
import DataFetching from "./components/DataFetching";

export const NameContext = React.createContext();
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <DataFetching />
        </Col>
      </Row>
      <Row>
        <Col>
          <NameContext.Provider value={"dravit"}>
            <Hookinterval />
          </NameContext.Provider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
