import React, { useState } from 'react';
import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import AutoScroll from './components/AutoScroll';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar id="root"  />
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
