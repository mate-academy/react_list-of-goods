import React from 'react';
import { ButtonType } from '../types';

export const Button = ({ handler, text }) => (
  <button
    type="button"
    onClick={handler}
  >
    {text}
  </button>

);

Button.propTypes = ButtonType;
