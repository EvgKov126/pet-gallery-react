import React from 'react';
import Header from './components/Header';
import PetList from './components/PetList';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <h2 className="main-title">Наші улюбленці</h2>
        <PetList />
      </main>
    </div>
  );
}

export default App;