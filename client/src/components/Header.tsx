import React from 'react';

const Header = (props: { title: string; score: number }): JSX.Element => {
  return (
    <div className="header">
      <p className="header__title">{props.title}</p>
      <div className="header__score">
        <p className="header__score__title">Score</p>
        <p className="header__score__value">{props.score}</p>
      </div>
    </div>
  );
};

export default Header;
