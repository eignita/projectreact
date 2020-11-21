import React, { useState } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  const WithCounter = (props) => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
      setCounter(counter + incrementNumber);
    };
    return <WrappedComponent counter={counter} handle={handleClick} {...props} />;
  };
  return WithCounter;
};

export default withCounter;
