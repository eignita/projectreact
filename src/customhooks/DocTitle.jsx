import React, {useState} from 'react'
import useDocTitle from './useDocTitle';

function DocTitle() {
const [count, setcount] = useState(0);
useDocTitle(count);

    return (
        <div><h3>Use custom hook</h3>
            <button onClick={()=>setcount(count+1)} >Count {count}</button>
        </div>
    )
}

export default DocTitle
