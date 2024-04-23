import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Types from './components/types';
import './App.css';

function App() {
  return(
    <Router>
    <div className='App'>
      <div className='content'>
        <Routes>
          <Route path='/types' element={<Types />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
