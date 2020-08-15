import React, { useState, useEffect } from 'react';
import './css/style.min.css';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
import { getFromLocalStorage, saveToLocalStorage } from './engine/local_storage';

const SCORE_LOCAL_STORAGE = 'score';

const gameTypes: GameTypes = {
  simple: { type: 'simple', title: 'Rock Paper Scissors' },
  extended: { type: 'extended', title: 'Rock Paper Scissors Lizard Spock' },
};

function App() {
  const [gameDetails, setGameDetails] = useState<GameDetails>(gameTypes.simple);
  const [score, setScore] = useState<number>(() => {
    const initialState = getFromLocalStorage(SCORE_LOCAL_STORAGE);
    if (initialState === '') return 0;
    return Number.parseInt(initialState);
  });

  useEffect(() => {
    saveToLocalStorage(SCORE_LOCAL_STORAGE, score.toString());
  }, [score]);

  const handleChangeGameClick = (event: React.MouseEvent): void => {
    const newGameDetails: GameDetails =
      gameDetails.type === 'simple' ? gameTypes.extended : gameTypes.simple;
    setGameDetails(newGameDetails);
  };

  const handleScoreUpdate = (modifier: number): void => {
    setScore((score) => score + modifier);
  };

  return (
    <div className='app'>
      <Header title={gameDetails.title} score={score} />
      <Game updateScore={handleScoreUpdate} />
      <Footer changeGameClick={handleChangeGameClick} />
    </div>
  );
}

export default App;
