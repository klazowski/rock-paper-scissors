import React from 'react';
import GameToken from '../GameToken';
import Triangle from '../Triangle';
import Pentagon from '../Pentagon';

const NewGame = (props: {
  gameType: GameType;
  onChoice: (event: React.MouseEvent, selectedToken: TokenSymbol) => void;
}): JSX.Element => {
  const gameTokensSimple: JSX.Element[] = [
    <button className={'rock'} onClick={(event: React.MouseEvent) => props.onChoice(event, 'rock')}>
      <GameToken tokenSymbol='rock' />
    </button>,
    <button
      className={'paper'}
      onClick={(event: React.MouseEvent) => props.onChoice(event, 'paper')}
    >
      <GameToken tokenSymbol='paper' />
    </button>,
    <button
      className={'scissors'}
      onClick={(event: React.MouseEvent) => props.onChoice(event, 'scissors')}
    >
      <GameToken tokenSymbol='scissors' />
    </button>,
  ];
  const gameTokensExtended: JSX.Element[] = [
    ...gameTokensSimple,
    <button
      className={'spock'}
      onClick={(event: React.MouseEvent) => props.onChoice(event, 'spock')}
    >
      <GameToken tokenSymbol='spock' />
    </button>,
    <button
      className={'lizard'}
      onClick={(event: React.MouseEvent) => props.onChoice(event, 'lizard')}
    >
      <GameToken tokenSymbol='lizard' />
    </button>,
  ];

  const gameBoard: JSX.Element =
    props.gameType === 'extended' ? (
      <Pentagon>{gameTokensExtended}</Pentagon>
    ) : (
      <Triangle>{gameTokensSimple}</Triangle>
    );

  return <div className='new-game'>{gameBoard}</div>;
};

export default NewGame;
