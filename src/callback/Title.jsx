import React from "react";

function Title() {
  console.log("Rendering Title");
  return (
    <h4>
      To improve performance and optimization useCallback Hook. - passes cached
      function. React.memo prevents a functional component to be re-rendered if
      its props or state donot change.
    </h4>
  );
}

export default React.memo(Title);
