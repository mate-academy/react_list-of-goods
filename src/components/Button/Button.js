import React from 'react';
import { ButtonShape } from '../Shape';

export const Button = ({ click, text }) => (
  <button
    className="buttons"
    onClick={click}
    type="button"
  >
    {text}
  </button>
);

Button.propTypes = ButtonShape.isRequired;
