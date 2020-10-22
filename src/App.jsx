import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./routes/Nav";
import About from "./routes/About";
import Shop from "./routes/Shop";
import ItemDetails from "./routes/ItemDetails";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Nav />
        </Row>
        <Row>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetails} />
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

const Home = () => {
  return <div>Home Page</div>;
};

export default App;
