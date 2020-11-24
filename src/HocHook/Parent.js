import React from 'react';
import withColor from './withColor';

function Parent(props) {
    const {handleClick, color} = props;
    return (
        <div>
            <button onClick={handleClick} style={{color: color}}>Click to change color</button>
        </div>
    )
}

export default withColor(Parent);
