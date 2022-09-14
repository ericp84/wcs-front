import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import WilderCard from './components/WilderCard/WilderCard';

function App() {

  return (
    <div>
    <header>
      <div className="container">
        <h1>Wilders Book</h1>
      </div>
    </header>
    <main className="container">
      <h2>Wilders</h2>
      <WilderCard/>
    </main>
    <footer>
      <div className="container">
        <p>&copy; 2022 Wild Code School</p>
      </div>
    </footer>
  </div>
  );
}

export default App;
