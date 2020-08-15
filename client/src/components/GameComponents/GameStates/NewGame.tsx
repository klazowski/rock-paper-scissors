import React from 'react';
import GameToken from '../GameToken';
import Triangle from '../Triangle';

const NewGame = (props: {
  gameType: GameType;
  onChoice: (event: React.MouseEvent, selectedToken: TokenSymbol) => void;
}): JSX.Element => {
  return (
    <div className='new-game'>
      <Triangle>
        <button
          className={'paper'}
          onClick={(event: React.MouseEvent) => props.onChoice(event, 'paper')}
        >
          <GameToken tokenSymbol='paper' />
        </button>
        <button
          className={'rock'}
          onClick={(event: React.MouseEvent) => props.onChoice(event, 'rock')}
        >
          <GameToken tokenSymbol='rock' />
        </button>
        <button
          className={'scissors'}
          onClick={(event: React.MouseEvent) => props.onChoice(event, 'scissors')}
        >
          <GameToken tokenSymbol='scissors' />
        </button>
      </Triangle>
    </div>
  );
};

export default NewGame;
