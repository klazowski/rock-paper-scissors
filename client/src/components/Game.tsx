import React, { useState } from 'react';
import NewGame from './GameStates/NewGame';
import Battle from './GameComponents/Battle';

//const GameTokensSimple: TokenSymbol[] = ['rock', 'paper', 'scissors'];
//const GameTokensExtended: TokenSymbol[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const Game = (props: { updateScore: (modifier: number) => void }): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>('new');
  const [userChoice, setUserChoice] = useState<TokenSymbol | undefined>(undefined);
  const [houseChoice, setHouseChoice] = useState<TokenSymbol | undefined>(undefined);

  const tokenClickHandler = (event: React.MouseEvent, tokenSymbol: TokenSymbol) => {
    setUserChoice(tokenSymbol);
    setHouseChoice('paper');
    // Set next game state
    setGameState('battle');
  };

  const playAgainClickHandler = (event: React.MouseEvent) => {
    setUserChoice(undefined);
    setHouseChoice(undefined);
    // Set next game state
    setGameState('new');
  };

  const handleScoreUpdate = (modifier: number): void => {
    setGameState('result');
    props.updateScore(modifier);
  };

  const gameBoard = () => {
    switch (gameState) {
      case 'new':
        return <NewGame gameType={'simple'} onChoice={tokenClickHandler} />;
      case 'battle':
        if (!userChoice || !houseChoice) return <p>Choice not accepted?</p>;
        return (
          <Battle
            userChoice={userChoice}
            houseChoice={houseChoice}
            onPlayAgainClick={playAgainClickHandler}
            updateScore={handleScoreUpdate}
          />
        );
      default:
        return <p>Error</p>;
    }
  };

  return <div className="game">{gameBoard()}</div>;
};

export default Game;
