import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import Hookinterval from './components/Hookinterval';
import DataFetching from './components/DataFetching';

function App() {
    return (
        <Container>
            <Row>
                <Col><Hookinterval /></Col>
            </Row>
            <Row>
                <Col><DataFetching /></Col>
            </Row>            
        </Container>
    )
}

export default App
