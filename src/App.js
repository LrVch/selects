import './App.css';

import React from 'react';
import Selects from './components/Selects/Selects';

function App() {
  return (
    <Selects onSubmit={v => console.log(v)}/>
  );
}

export default App;
