// src/App.js
import React from 'react';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* The Navbar is now fixed at the top */}
      <Navbar />

      <main className="page-content">
        <h1>Page Content</h1>
        <p>This content will appear directly below the header.</p>
        <p>Scroll down to see the navbar stay in place.</p>
        <div style={{ height: '200vh', paddingTop: '2rem' }}>
          <p>This is some tall content to make the page scrollable...</p>
        </div>
      </main>
    </div>
  );
}

export default App;