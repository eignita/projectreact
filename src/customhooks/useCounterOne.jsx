import {useState} from "react";

function useCounterOne(initialvalue) {
  const [count, setcount] = useState(initialvalue);

  const increment = () => {
    setcount((prevcount) => prevcount + 1);
  };

  const decrement = () => {
    setcount((prevcount) => prevcount - 1);
  };

  const reset = () => {
    setcount(initialvalue);
  };

  return [count, increment, decrement, reset];
}

export default useCounterOne;
