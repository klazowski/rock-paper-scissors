import React from 'react';

const Pentagon = (props: { children: JSX.Element[] }): JSX.Element => {
  if (props.children.length !== 5) {
    console.log(`Pentagon expects exactly 5 children elements`);
    return <></>;
  }

  return (
    <div className='pentagon-countainer'>
      <img className='pentagon' src='./images/bg-pentagon.svg' alt=''></img>
      <div className='pentagon-node pentagon-node__1'>{props.children[0]}</div>
      <div className='pentagon-node pentagon-node__2'>{props.children[1]}</div>
      <div className='pentagon-node pentagon-node__3'>{props.children[2]}</div>
      <div className='pentagon-node pentagon-node__4'>{props.children[3]}</div>
      <div className='pentagon-node pentagon-node__5'>{props.children[4]}</div>
    </div>
  );
};

export default Pentagon;
