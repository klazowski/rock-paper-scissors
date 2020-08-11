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
  const [gameDetails, setGameDetails] = useState<GameDetails>(gameTypes.simple);
  const [score, setScore] = useState<number>(0);

  const handleChangeGameClick = (event: React.MouseEvent): void => {
    const newGameDetails: GameDetails =
      gameDetails.type === 'simple' ? gameTypes.extended : gameTypes.simple;
    setGameDetails(newGameDetails);
  };

  const handleScoreUpdate = (modifier: number): void => {
    setScore((score) => score + modifier);
  };

  return (
    <div className="app">
      <Header title={gameDetails.title} score={score} />
      <Game updateScore={handleScoreUpdate} />
      <Footer changeGameClick={handleChangeGameClick} />
    </div>
  );
}

export default App;
