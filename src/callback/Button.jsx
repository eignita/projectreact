import React from "react";
import { Button as Btn } from "react-bootstrap";

function Button(props) {
  console.log("rendering button: ", props.children);
  return (
    <div>
      <Btn variant="info" onClick={props.handleClick}>
        {props.children}
      </Btn>
    </div>
  );
}

export default React.memo(Button);
