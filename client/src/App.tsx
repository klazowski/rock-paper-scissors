import React, { useState, useEffect } from 'react';
import './css/style.min.css';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
import { getFromLocalStorage, saveToLocalStorage } from './engine/local_storage';
import Modal from './components/Modal';
import Rules from './components/GameComponents/Rules';

const SCORE_LOCAL_STORAGE = 'score';

const GAME_TOKENS_SIMPLE: TokenSymbol[] = ['rock', 'paper', 'scissors'];
const GAME_TOKENS_EXTENDED: TokenSymbol[] = [...GAME_TOKENS_SIMPLE, 'lizard', 'spock'];

const gameTypes: GameTypes = {
  simple: { type: 'simple', title: 'Rock Paper Scissors', tokens: GAME_TOKENS_SIMPLE },
  extended: {
    type: 'extended',
    title: 'Rock Paper Scissors Lizard Spock',
    tokens: GAME_TOKENS_EXTENDED,
  },
};

const getStoredScore = (type: GameType): number => {
  const initialState = getFromLocalStorage(`${SCORE_LOCAL_STORAGE}_${type}`);
  if (initialState === '') return 0;
  return Number.parseInt(initialState);
};

function App() {
  const [gameDetails, setGameDetails] = useState<GameDetails>(gameTypes.simple);
  const [score, setScore] = useState<number>(() => getStoredScore(gameDetails.type));
  const [showRulesModal, setShowRulesModal] = useState<boolean>(false);

  useEffect(() => {
    saveToLocalStorage(`${SCORE_LOCAL_STORAGE}_${gameDetails.type}`, score.toString());
  }, [score]);

  useEffect(() => setScore(getStoredScore(gameDetails.type)), [gameDetails]);

  const handleChangeGameClick = (event: React.MouseEvent): void => {
    const newGameDetails: GameDetails =
      gameDetails.type === 'simple' ? gameTypes.extended : gameTypes.simple;
    setGameDetails(newGameDetails);
  };

  const handleScoreUpdate = (modifier: number): void => setScore((score) => score + modifier);
  const handleRulesClick = (): void => setShowRulesModal(true);
  const handleCloseModalclick = () => setShowRulesModal(false);

  return (
    <div className='app'>
      <Header title={gameDetails.title} score={score} />
      <Game updateScore={handleScoreUpdate} gameDetails={gameDetails} />
      <Footer changeGameClick={handleChangeGameClick} rulesClick={handleRulesClick} />
      {showRulesModal ? (
        <Modal>
          <Rules gameType={gameDetails.type} onCloseClick={handleCloseModalclick} />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
