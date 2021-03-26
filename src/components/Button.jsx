import React from 'react';
import { ButtonType } from '../types';

export const Button = ({ onClick, text }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {text}
  </button>

);

Button.propTypes = ButtonType;
