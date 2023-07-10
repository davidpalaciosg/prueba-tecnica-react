import React from 'react';
import './App.scss';
import Tramos from './components/organisms/Tramos/Tramos';
import Clientes from './components/organisms/Clientes/Clientes';
import Presentation from './components/atoms/Presentation';
import NavBar from './components/molecules/NavBar/navBar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Presentation} />
          <Route path="/tramos" Component={Tramos} />
          <Route path="/clientes" Component={Clientes} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
