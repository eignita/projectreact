import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function HookToggleDisplay() {
  const [display, setDisplay] = useState(true);
  const [btncolor, setBtncolor] = useState('success');

  useEffect(()=>{
      setBtncolor(display === true ? "success" : "danger");
  },[display])

  return (
    <div>
      <Button variant={btncolor} onClick={() => setDisplay(!display)}>
        Toggle display
      </Button>
    </div>
  );
}

export default HookToggleDisplay;
