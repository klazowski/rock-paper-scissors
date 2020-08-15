import React from 'react';

const Footer = (props: {
  changeGameClick: (event: React.MouseEvent) => void;
  rulesClick: (event: React.MouseEvent) => void;
}): JSX.Element => {
  return (
    <div className='footer'>
      <button className='btn btn_rules' aria-label='Rules' onClick={props.rulesClick}>
        Rules
      </button>
      <button
        className='btn btn_gameType'
        aria-label='Change game type'
        onClick={props.changeGameClick}
      >
        Change game type
      </button>
    </div>
  );
};

export default Footer;
