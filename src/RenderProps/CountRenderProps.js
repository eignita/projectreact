import React, { useState } from 'react'

function CountRenderProps(props) {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            { props.render(count, handleCount) }
        </div>
    )
}

export default CountRenderProps
