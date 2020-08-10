import React from 'react';
import GameToken from './GameToken';
import { calculateBattleResult } from '../../engine/battle';

const Battle = (props: {
  userChoice: TokenSymbol;
  houseChoice: TokenSymbol;
  onPlayAgainClick: (event: React.MouseEvent) => void;
}): JSX.Element => {
  const battleResult = (): JSX.Element => {
    switch (calculateBattleResult(props.userChoice, props.houseChoice)) {
      case 'won':
        return <p>You won</p>;
      case 'lost':
        return <p>You lost</p>;
      case 'tie':
        return <p>It's a tie</p>;
      default:
        return <p>Something went wrong</p>;
    }
  };
  return (
    <div>
      <div className="flex--center flex--row">
        <div>
          <GameToken tokenSymbol={props.userChoice} />
          <p>You picked</p>
        </div>
        <div>
          <GameToken tokenSymbol={props.houseChoice} />
          <p>The house picked</p>
        </div>
      </div>
      <div className="flex--center flex--column">
        {battleResult()}
        <button className="btn--cta" onClick={props.onPlayAgainClick}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Battle;
