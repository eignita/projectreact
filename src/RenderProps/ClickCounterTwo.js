import React from 'react'

function ClickCounterTwo(props) {
    const {count, handleCount} = props;
    return (
        <div>
            <button onClick={handleCount} >Clicked { count } times</button>
        </div>
    )
}

export default ClickCounterTwo
