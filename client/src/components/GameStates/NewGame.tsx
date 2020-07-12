import React from 'react';
import BtnRock from '../GameComponents/BtnRock';

const NewGame = (): JSX.Element => {
  return (
    <div className="new-game">
      <img className="triangle" src="./images/bg-triangle.svg" width={200}></img>
      <img className="paper" src="./images/icon-paper.svg" width={50}></img>
      <img className="scissors" src="./images/icon-scissors.svg" width={50}></img>
      <BtnRock />
    </div>
  );
};

export default NewGame;
