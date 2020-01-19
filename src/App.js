import React from 'react';
import logo from './logo.svg';

import JSSBootstrap from "./jss-bootstrap";
import Example from "./examples/Example";
import './App.css';

function App() {
    console.log(JSSBootstrap)
  return (
    <div className="App">
      <h2>Code overview</h2>
            <Example/>
    </div>
  );
}

export default App;
