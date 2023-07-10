import React from 'react';
import './App.scss';
import Tramos from './components/organisms/Tramos/Tramos';
import Clientes from './components/organisms/Clientes/Clientes';
import Presentation from './components/atoms/Presentation';

function App() {
  return (
    <div className="App">
      <Presentation />
      <Tramos />
      <Clientes />
    </div>
  );
}

export default App;
