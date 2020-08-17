import React from 'react';
import GameToken from '../GameToken';
import Triangle from '../Triangle';
import Pentagon from '../Pentagon';

const NewGame = (props: {
  gameDetails: GameDetails;
  onChoice: (event: React.MouseEvent, selectedToken: TokenSymbol) => void;
}): JSX.Element => {
  const gameTokens: JSX.Element[] = props.gameDetails.tokens.map((tokenSymbol: TokenSymbol) => {
    return (
      <button
        className={`${tokenSymbol} btn--token`}
        onClick={(event: React.MouseEvent) => props.onChoice(event, tokenSymbol)}
      >
        <GameToken tokenSymbol={tokenSymbol} />
      </button>
    );
  });

  const gameBoard: JSX.Element =
    props.gameDetails.type === 'extended' ? (
      <Pentagon>{gameTokens}</Pentagon>
    ) : (
      <Triangle>{gameTokens}</Triangle>
    );

  return <div className='new-game'>{gameBoard}</div>;
};

export default NewGame;
