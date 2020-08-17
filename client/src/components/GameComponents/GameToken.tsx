import React from 'react';

const GameToken = (props: { tokenSymbol: TokenSymbol; isWinner?: boolean }): JSX.Element => {
  return (
    <div
      className={`token-ring token-ring--${props.tokenSymbol} ${
        props.isWinner ? 'token-ring--winner' : ''
      }`}
    >
      <div className={`token-ring__surface`}>
        <div className={`token-ring__inner-wall`}>
          <div className={`token-ring__content`}>
            <img src={`./images/icon-${props.tokenSymbol}.svg`} alt={`${props.tokenSymbol}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameToken;
