import React from 'react';

const Rules = (props: {
  gameType: GameType;
  onCloseClick: (event: React.MouseEvent) => void;
}): JSX.Element => {
  const rulesImage: JSX.Element =
    props.gameType === 'extended' ? (
      <img src='./images/image-rules-bonus.svg' alt='' className='rules__image' />
    ) : (
      <img
        src='./images/image-rules.svg'
        alt='Rock beats scissors. Scissors beat paper. Paper beats rock.'
        className='rules__image'
      />
    );
  return (
    <>
      <p className='rules__title'>Rules</p>
      {rulesImage}
      <button className='btn btn__close_rules' onClick={props.onCloseClick}></button>
    </>
  );
};

export default Rules;
