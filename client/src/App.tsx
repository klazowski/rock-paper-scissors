import React, { useState } from 'react';
import './css/style.min.css';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';

const gameTypes: GameTypes = {
  rps: { type: 'rps', title: 'Rock Paper Scissors' },
  rpsls: { type: 'rpsls', title: 'Rock Paper Scissors Lizard Spock' },
};

function App() {
  const [gameType, setGameType] = useState<GameType>(gameTypes.rps);
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
