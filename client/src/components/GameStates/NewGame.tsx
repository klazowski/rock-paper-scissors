import React from 'react';
import GameToken from '../GameComponents/GameToken';
import Triangle from '../GameComponents/Triangle';

const NewGame = (props: {
  gameType: GameType;
  onChoice: (event: React.MouseEvent, selectedToken: TokenSymbol) => void;
}): JSX.Element => {
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
      <Triangle>
        <button
          className={'paper'}
          onClick={(event: React.MouseEvent) => props.onChoice(event, 'paper')}
        >
          <GameToken tokenSymbol="paper" tokenFrameColour={paperGradient} />
        </button>
        <button
          className={'rock'}
          onClick={(event: React.MouseEvent) => props.onChoice(event, 'rock')}
        >
          <GameToken tokenSymbol="rock" tokenFrameColour={rockGradient} />
        </button>
        <button
          className={'scissors'}
          onClick={(event: React.MouseEvent) => props.onChoice(event, 'scissors')}
        >
          <GameToken tokenSymbol="scissors" tokenFrameColour={scissorsGradient} />
        </button>
      </Triangle>
    </div>
  );
};

export default NewGame;
