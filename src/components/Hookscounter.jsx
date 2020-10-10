import React, {useState} from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';
import './Style.css';

function Hookscounter() {
    const initialcount = 0;
    const [count, setCount] = useState(initialcount);
    const increment = () => { 
        setCount(count => count+1);
    }

    const incrementFive = () => {
        for (let i = 1; i<=5; i++) {
            increment();
          }
    };

    return (
        <div className="Hookscounter">
            <h3>Hookscounter - UseState</h3>
            <p>You have clicked {count} times</p>
            <ButtonGroup>
                <Button variant="primary" onClick={() => setCount(initialcount)}>Reset</Button>{' '}
                <Button variant="secondary" onClick={increment}>Increment</Button>{' '}
                <Button variant="primary" onClick={incrementFive}>IncrementFive</Button>{' '}
            </ButtonGroup>
        </div>
    )
}

export default Hookscounter
