import React from "react";

function Count(props) {
  console.log("rendering Count");
  return (
    <div>
      {props.text} - {props.count}
    </div>
  );
}

export default React.memo(Count);
