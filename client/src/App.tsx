import React from 'react';
import './css/style.min.css';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header title="Rock Paper Scissors" score={25} />
    </div>
  );
}

export default App;
