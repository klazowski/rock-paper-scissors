import React, { useState } from 'react';
import NewGame from './GameStates/NewGame';

type GameState = 'new' | 'youPicked' | 'bothPicked' | 'userWin' | 'houseWin';
type GameChoice = 'rock' | 'paper' | 'scissors' | undefined;

const Game = (): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>('new');
  const [userChoice, setUserChoice] = useState<GameChoice>(undefined);
  const [houseChoice, setHouseChoice] = useState<GameChoice>(undefined);

  const gameBoard = () => {
    switch (gameState) {
      case 'new':
        return <NewGame />;
      default:
        return <p>Error</p>;
    }
  };

  return <div className="game">{gameBoard()}</div>;
};

export default Game;
