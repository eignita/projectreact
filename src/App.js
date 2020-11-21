import React from "react";
import './App.css';
import ClickCount from "./HocCustomHook/ClickCount";
import ClickCounterTwo from "./RenderProps/ClickCounterTwo";
import CountRenderProps from "./RenderProps/CountRenderProps";
import HoverCounterTwo from "./RenderProps/HoverCounterTwo";

function App() {
  return (
    <div className="center">
    <h3>HOC using custom hooks</h3>
      <ClickCount />

      <h3> Render props - share code with react components using props whose value is a function</h3>
      <CountRenderProps render={(count, handleCount) => <ClickCounterTwo count={count} handleCount={handleCount} />} />
      <CountRenderProps render={(count, handleCount) => <HoverCounterTwo count={count} handleCount={handleCount} />} />
    </div>
  );
}

export default App;
