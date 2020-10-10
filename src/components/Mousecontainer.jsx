import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Mousecontainer() {
  const [display, setDisplay] = useState(true);
  const [btncolor, setBtncolor] = useState('success');

  useEffect(()=>{
      if(display === true) {
          setBtncolor("success");
      }
      else {
          setBtncolor("danger");
      }
  },[display])

  return (
    <div>
      <Button variant={btncolor} onClick={() => setDisplay(!display)}>
        Toggle display
      </Button>
    </div>
  );
}

export default Mousecontainer;
