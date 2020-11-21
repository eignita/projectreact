import React from 'react';
import withCounter from './withCounter';

function HoverCounter(props) {
    const {counter, handle} = props;
    return (
        <div>
            <h2 onMouseOver={handle}>Counter {counter} Hover</h2>
        </div>
    )
}

export default withCounter(HoverCounter, 5);
