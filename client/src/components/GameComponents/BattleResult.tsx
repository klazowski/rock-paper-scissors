import React from 'react';

const BattleResult = (props: { result: BattleResult }): JSX.Element => {
  switch (props.result) {
    case undefined:
      return <></>;
    case 'won':
      return <p className='battle-result'>You win</p>;
    case 'lost':
      return <p className='battle-result'>You lose</p>;
    case 'tie':
      return <p className='battle-result'>It's a tie</p>;
    default:
      return <p className='battle-result battle-result--error'>Something went wrong</p>;
  }
};

export default BattleResult;
