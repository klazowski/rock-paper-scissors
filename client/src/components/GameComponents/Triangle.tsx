import React from 'react';

const Triangle = (props: { children: JSX.Element[] }): JSX.Element => {
  if (props.children.length !== 3) {
    console.log(`Triangle expects exactly 3 children elements`);
    return <></>;
  }

  return (
    <div className="triangle-countainer">
      <img className="triangle" src="./images/bg-triangle.svg" alt=""></img>
      <div className="triangle-node triangle-node__1">{props.children[0]}</div>
      <div className="triangle-node triangle-node__2">{props.children[1]}</div>
      <div className="triangle-node triangle-node__3">{props.children[2]}</div>
    </div>
  );
};

export default Triangle;
