import React from 'react';

const BattleResult = (props: { result: BattleResult }): JSX.Element => {
  switch (props.result) {
    case undefined:
      return <></>;
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

export default BattleResult;
