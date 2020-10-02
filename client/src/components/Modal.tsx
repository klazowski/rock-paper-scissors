import React from 'react';

const Modal = (props: { children: JSX.Element }): JSX.Element => {
  return (
    <div className='modal__container'>
      <div className='modal__content'>{props.children}</div>
    </div>
  );
};

export default Modal;
