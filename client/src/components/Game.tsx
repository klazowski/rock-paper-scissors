import React, { useState, useEffect } from 'react';
import NewGame from './GameComponents/GameStates/NewGame';
import Battle from './GameComponents/Battle';
import { calculateBattleResult } from '../engine/battle';

//const GameTokensSimple: TokenSymbol[] = ['rock', 'paper', 'scissors'];
//const GameTokensExtended: TokenSymbol[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const Game = (props: { updateScore: (modifier: number) => void }): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>('new');
  const [userChoice, setUserChoice] = useState<TokenSymbol | undefined>(undefined);
  const [houseChoice, setHouseChoice] = useState<TokenSymbol | undefined>(undefined);
  const [battleResult, setBattleResult] = useState<BattleResult>(undefined);

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

  const tokenClickHandler = (event: React.MouseEvent, tokenSymbol: TokenSymbol) => {
    setUserChoice(tokenSymbol);
    setHouseChoice('paper');
    // Set next game state
    setGameState('battle');
  };

  const playAgainClickHandler = (event: React.MouseEvent) => {
    setUserChoice(undefined);
    setHouseChoice(undefined);
    setBattleResult(undefined);
    // Set next game state
    setGameState('new');
  };

  const gameBoard = () => {
    switch (gameState) {
      case 'new':
        return <NewGame gameType={'simple'} onChoice={tokenClickHandler} />;
      case 'battle':
      case 'result':
        if (!userChoice || !houseChoice) return <p>Choice not accepted?</p>;
        return (
          <Battle
            userChoice={userChoice}
            houseChoice={houseChoice}
            onPlayAgainClick={playAgainClickHandler}
            battleResult={battleResult}
          />
        );
      default:
        return <p>Error</p>;
    }
  };

  return <div className='game'>{gameBoard()}</div>;
};

export default Game;
