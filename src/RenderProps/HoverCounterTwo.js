import React from 'react'

function HoverCounterTwo(props) {
    const {count, handleCount} = props;
    return (
        <div>
            <h4 onMouseOver={handleCount}> Hover { count } times</h4>
        </div>
    )
}

export default HoverCounterTwo
