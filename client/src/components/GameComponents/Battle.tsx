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
      <div className='battle-tokens flex--row flex--center'>
        <div className='battle-token'>
          <GameToken tokenSymbol={props.userChoice} hasShadow={props.battleResult === 'won'} />
          <p>You picked</p>
        </div>
        <div className='battle-token'>
          <GameToken tokenSymbol={props.houseChoice} hasShadow={props.battleResult === 'lost'} />
          <p>The house picked</p>
        </div>
      </div>
      <div className='battle-results flex--column flex--center'>
        <BattleResult result={props.battleResult} />
        <button className='btn--cta' onClick={props.onPlayAgainClick}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Battle;
