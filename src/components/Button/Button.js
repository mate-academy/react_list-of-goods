import React from 'react';
import './Button.css';
import { ButtonTypes } from '../Shape/Shape';

export const Button = (props) => {
  const {
    className,
    action,
    text,
  } = props;

  return (
    <button
      type="button"
      className={className}
      onClick={action}
    >
      {text}
    </button>
  );
};

Button.propTypes = ButtonTypes;
