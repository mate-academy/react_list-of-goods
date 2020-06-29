import React from 'react';
import { ButtonTypes } from '../Shape/Shape';

export const Button = (props) => {
  const {
    classN,
    func,
    text,
  } = props;

  return (
    <button
      type="button"
      className={classN}
      onClick={func}
    >
      {text}
    </button>
  );
};

Button.propTypes = ButtonTypes;
