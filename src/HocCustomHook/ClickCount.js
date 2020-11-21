import React from 'react';
import useCounter from './useCounter';

function ClickCount() {
    const [count, handleCount] = useCounter(10, 5);
    return (
        <div>
            <button onClick={handleCount} >Counter {count} times</button>
        </div>
    )
}

export default ClickCount;
