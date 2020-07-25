import React from 'react';
import GameToken from '../GameComponents/GameToken';

const NewGame = (): JSX.Element => {
  const tokenClickHandler = (event: React.MouseEvent, tokenSymbol: TokenSymbol) => {
    console.log(`Selected ${tokenSymbol}`);
    // Set next game state
  };
  const scissorsGradient: Gradient = {
    gradientStart: `hsl(40, 84%, 53%)`,
    gradientEnd: `hsl(39, 89%, 49%)`,
  };
  const paperGradient: Gradient = {
    gradientStart: `hsl(230, 89%, 65%)`,
    gradientEnd: `hsl(230, 89%, 62%)`,
  };
  const rockGradient: Gradient = {
    gradientStart: `hsl(349, 70%, 56%)`,
    gradientEnd: `hsl(349, 71%, 52%)`,
  };
  const lizardGradient: Gradient = {
    gradientStart: `hsl(261, 72%, 63%))`,
    gradientEnd: `hsl(261, 73%, 60%)`,
  };
  const spockGradient: Gradient = {
    gradientStart: `hsl(189, 58%, 57%)`,
    gradientEnd: `hsl(189, 59%, 53%)`,
  };
  return (
    <div className="new-game">
      <img className="triangle" src="./images/bg-triangle.svg" alt="" width={200}></img>
      <GameToken
        onClick={tokenClickHandler}
        tokenSymbol="paper"
        tokenFrameColour={paperGradient}
        position={{ top: '-30%', left: '-30%' }}
      />
      <GameToken
        onClick={tokenClickHandler}
        tokenSymbol="scissors"
        tokenFrameColour={scissorsGradient}
        position={{ top: '-30%', left: '50%' }}
      />
      <GameToken
        onClick={tokenClickHandler}
        tokenSymbol="rock"
        tokenFrameColour={rockGradient}
        position={{ top: '40%', left: '10%' }}
      />
    </div>
  );
};

export default NewGame;
