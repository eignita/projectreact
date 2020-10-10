import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Counter from "./components/Counter";
import HookeffectOne from "./components/HookeffectOne";
import Hookscounter from "./components/Hookscounter";
import HookscounterArray from "./components/HookscounterArray";
import HookscounterObject from "./components/HookscounterObject";
// import Hookmouse from "./components/Hookmouse";
import Mousecontainer from "./components/Mousecontainer";

function App() {
  return (
    <Container>
      <Row>
        <Counter />
      </Row>
      <Row>
        <Hookscounter />
      </Row>
      <Row>
        <HookscounterObject />
      </Row>
      <Row>
        <HookscounterArray />
      </Row>
      <Row>
        <HookeffectOne />
      </Row>
      <Row>
        {/* <Hookmouse /> */}
      </Row>
      <Row>
        <Mousecontainer />
      </Row>
    </Container>
  );
}

export default App;
