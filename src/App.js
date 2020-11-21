import React from "react";
import './App.css';
import ClickCounter from "./HocHook/ClickCounter";
import HoverCounter from "./HocHook/HoverCounter";

function App() {
  return (
    <div className="center">
      <ClickCounter name='dravit' />
      <HoverCounter />
    </div>
  );
}

export default App;
