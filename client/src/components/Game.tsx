import React, { useState, useEffect } from 'react';
import NewGame from './GameComponents/GameStates/NewGame';
import Battle from './GameComponents/Battle';
import { calculateBattleResult } from '../engine/battle';
import { housePick } from '../engine/house';

const Game = (props: {
  updateScore: (modifier: number) => void;
  gameDetails: GameDetails;
}): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>('new');
  const [userChoice, setUserChoice] = useState<TokenSymbol | undefined>(undefined);
  const [houseChoice, setHouseChoice] = useState<TokenSymbol | undefined>(undefined);
  const [battleResult, setBattleResult] = useState<BattleResult>(undefined);

  useEffect(() => {
    if (userChoice) setHouseChoice(housePick(props.gameDetails));
  }, [userChoice]);

  useEffect(() => {
    if (userChoice && houseChoice) setBattleResult(calculateBattleResult(userChoice, houseChoice));
  }, [userChoice, houseChoice]);

  useEffect(() => {
    if (gameState === 'battle') {
      setGameState('result');
      switch (battleResult) {
        case 'won':
          props.updateScore(1);
          break;
        case 'lost':
          props.updateScore(-1);
          break;
        default:
          break;
      }
    }
  }, [battleResult]);

  const handleTokenClick = (event: React.MouseEvent, tokenSymbol: TokenSymbol) => {
    setUserChoice(tokenSymbol);
    // Set next game state
    setGameState('battle');
  };

  const handlePlayAgainClick = (event: React.MouseEvent) => {
    setUserChoice(undefined);
    setHouseChoice(undefined);
    setBattleResult(undefined);
    // Set next game state
    setGameState('new');
  };

  const gameBoard = (): JSX.Element => {
    switch (gameState) {
      case 'new':
        return <NewGame gameDetails={props.gameDetails} onChoice={handleTokenClick} />;
      case 'battle':
      case 'result':
        if (!userChoice || !houseChoice) return <p>Choice not accepted?</p>;
        return (
          <Battle
            userChoice={userChoice}
            houseChoice={houseChoice}
            onPlayAgainClick={handlePlayAgainClick}
            battleResult={battleResult}
          />
        );
      default:
        return <p>Game board render error</p>;
    }
  };

  return <div className='game'>{gameBoard()}</div>;
};

export default Game;
