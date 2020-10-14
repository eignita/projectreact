import React, {useEffect, useRef} from "react";
import {InputGroup, FormControl} from 'react-bootstrap';

function FocusInput() {
  const usernameRef = useRef(null);
  useEffect(()=>{
  //Focus the input element
    usernameRef.current.focus();
  },[])
  return (
    <div>
      <h4> Understanding ref hooks</h4>
      <InputGroup className="mb-3">        
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={usernameRef}
        />
      </InputGroup>
    </div>
  );
}

export default FocusInput;
