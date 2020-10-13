import React, { useReducer} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ComponentA from "./reducers/ComponentA";
import ComponentB from "./reducers/ComponentB";
import ComponentC from "./reducers/ComponentC";

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch }}>
      <div>
        Count: {count}
        <Container>
          <Row>
            <Col>
              <ComponentA />
            </Col>
          </Row>
          <Row>
            <Col>
              <ComponentB />
            </Col>
          </Row>
          <Row>
            <Col>
              <ComponentC />
            </Col>
          </Row>
        </Container>
      </div>
    </CountContext.Provider>
  );
}

export default App;
