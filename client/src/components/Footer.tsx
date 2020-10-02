import React from 'react';

const Footer = (props: {
  changeGameClick: (event: React.MouseEvent) => void;
  rulesClick: (event: React.MouseEvent) => void;
}): JSX.Element => {
  return (
    <div className='footer'>
      <div className='footer__buttons'>
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
      <div className='footer__author'>
        <p>
          Implemented by <span>Krzysztof Łazowski</span> based on FrontendMentor.io challenge
          design.
        </p>
      </div>
    </div>
  );
};

export default Footer;
