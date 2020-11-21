import React, { useState } from 'react';

function ClickCounter() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Counter {counter} Click</button>
        </div>
    )
}

export default ClickCounter
