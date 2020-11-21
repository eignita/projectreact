import React, { useState } from 'react';

function HoverCounter() {
    const [counter, setCounter] = useState(0);

    const handleOver = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2 onMouseOver={handleOver}>Counter {counter} Hover</h2>
        </div>
    )
}

export default HoverCounter
