import React from 'react';
import GameToken from './GameToken';
import BattleResult from './BattleResult';

const Battle = (props: {
  userChoice: TokenSymbol;
  houseChoice: TokenSymbol;
  onPlayAgainClick: (event: React.MouseEvent) => void;
  battleResult: BattleResult;
}): JSX.Element => {
  return (
    <div>
      <div className='flex--center flex--row'>
        <div>
          <GameToken tokenSymbol={props.userChoice} />
          <p>You picked</p>
        </div>
        <div>
          <GameToken tokenSymbol={props.houseChoice} />
          <p>The house picked</p>
        </div>
      </div>
      <div className='flex--center flex--column'>
        <BattleResult result={props.battleResult} />
        <button className='btn--cta' onClick={props.onPlayAgainClick}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Battle;
