import {useState} from 'react';

function useCounter(initialValue, number) {
    const [count, setCount] = useState(initialValue);
    const handleCount = () => {
        setCount(count + number);
    }

    return [count, handleCount];
}

export default useCounter;
