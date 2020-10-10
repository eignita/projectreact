import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from "react-bootstrap";
import Hookinterval from './components/Hookinterval';

function App() {
    return (
        <Container>
            <Row>
                <Hookinterval />                 
            </Row>            
        </Container>
    )
}

export default App
