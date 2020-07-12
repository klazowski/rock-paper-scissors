import React, { useState } from 'react';
import { ReactComponent as Pentagon } from '../images/bg-pentagon.svg';

type GameState = 'new' | 'youPicked' | 'bothPicked' | 'userWin' | 'houseWin';
type GameChoice = 'rock' | 'paper' | 'scissors' | undefined;

const Game = (): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>('new');
  const [userChoice, setUserChoice] = useState<GameChoice>(undefined);
  const [houseChoice, setHouseChoice] = useState<GameChoice>(undefined);

  return (
    <div className="game">
      <Pentagon />
    </div>
  );
};

export default Game;
