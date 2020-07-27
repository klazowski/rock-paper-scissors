import React, { useState } from 'react';
import NewGame from './GameStates/NewGame';

const GameTokensSimple: TokenSymbol[] = ['rock', 'paper', 'scissors'];
const GameTokensExtended: TokenSymbol[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const Game = (): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>('new');
  const [tokens, setTokens] = useState<TokenSymbol[]>(GameTokensSimple);
  const [userChoice, setUserChoice] = useState<TokenSymbol | undefined>(undefined);
  const [houseChoice, setHouseChoice] = useState<TokenSymbol | undefined>(undefined);

  const tokenClickHandler = (event: React.MouseEvent, tokenSymbol: TokenSymbol) => {
    console.log(`Selected ${tokenSymbol}`);
    // Set next game state
  };

  const gameBoard = () => {
    switch (gameState) {
      case 'new':
        return <NewGame gameType={'simple'} onChoice={tokenClickHandler} />;
      default:
        return <p>Error</p>;
    }
  };

  return <div className="game">{gameBoard()}</div>;
};

export default Game;
