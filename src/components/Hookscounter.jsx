import React, {useState} from 'react'
import './Style.css';

function Hookscounter() {
    const [count, setCount] = useState(0);
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
            <button onClick={increment}>Increment</button>
            <button onClick={incrementFive}>IncrementFive</button>
        </div>
    )
}

export default Hookscounter
