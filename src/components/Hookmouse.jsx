import React, {useState, useEffect} from 'react'

function Hookmouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logmouseposition = e => {
        console.log("mouse event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useEffect called.");
        window.addEventListener("mousemove", logmouseposition);

        return() => {
            console.log("Component unmounting code");
            window.removeEventListener("mousemove", logmouseposition);
        }
    }, [])

    return (
        <div>
            <h4>
                useEffect - runs after every render of component, Conditionally render
                based on array of props or state changes (check 2nd parameter in useEffect).
                If its empty array in useEffect (second parameter) - render only 1st time.
            </h4>
            Hooks mouse position 
            x: {x}; y: {y}
        </div>
    )
}

export default Hookmouse
