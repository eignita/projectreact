import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Hookscounter from './components/Hookscounter';
import HookscounterArray from './components/HookscounterArray';
import HookscounterObject from './components/HookscounterObject';

function App() {

  return (
    <div className="App">
      <Counter />
      <Hookscounter />
      <HookscounterObject />
      <HookscounterArray />
    </div>
  );
}

export default App;
