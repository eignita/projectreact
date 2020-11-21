import React  from 'react';
import withCounter from './withCounter';

function ClickCounter(props) {

    const {counter, handle, name} = props;
    return (
        <div>
            <button onClick={handle}>{ name } Counter {counter} Click</button>
        </div>
    )
}

export default withCounter(ClickCounter, 10)
