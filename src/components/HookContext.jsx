import React, {useContext} from 'react'
import {NameContext} from '../App'

function HookContext() {
    const name = useContext(NameContext);
    return (
        <div>
            useContext - {name}
        </div>
    )
}

export default HookContext
