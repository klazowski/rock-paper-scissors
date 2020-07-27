import React, { useState } from 'react';
import './css/style.min.css';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';

function App() {
  const gameTypes: GameTypes = {
    simple: { type: 'simple', title: 'Rock Paper Scissors' },
    extended: { type: 'extended', title: 'Rock Paper Scissors Lizard Spock' },
  };
  const [gameType, setGameType] = useState<GameDetails>(gameTypes.simple);
  const [score, setScore] = useState<number>(12);

  return (
    <div className="app">
      <Header title={gameType.title} score={score} />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
