import React, {useState} from 'react'

const  withColor = (OriginalComponent) =>{    
    const WithColor = () => {
        const [color, setColor] = useState(null);
        const handleClick = () => {
            setColor("red");
            console.log(color);
        }
        return <OriginalComponent color={color} handleClick={handleClick} />
    }
    return WithColor;
}

export default withColor
