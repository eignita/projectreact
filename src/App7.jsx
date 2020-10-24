import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import CounterOne from "./customhooks/CounterOne";
import UpcomingItems from "./reducers2/UpcomingItems";
import Nav from "./routes/Nav";
import About from "./routes/About";
import Shop from "./routes/Shop";
import ItemDetails from "./routes/ItemDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DocTitle from "./customhooks/DocTitle";
import CounterTwo from "./customhooks/CounterTwo";

function App() {
  return (
    <Router>
      <Container>
        <Row>Welcome to Docker world !!</Row>
        <Row>
          <CounterOne />
        </Row>
        <Row>
          <CounterTwo />
        </Row>
        <Row>
          <DocTitle />
        </Row>
        <Row>
          <Nav />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetails} />
            <Route path="/upcomingitems" component={UpcomingItems}></Route>
            <Route path="/ItemDetails/:id" component={ItemDetails}></Route>
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
