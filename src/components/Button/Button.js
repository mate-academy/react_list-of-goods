import React from 'react';
import './Button.scss';
import { ButtonTypes } from '../../constants/proptypes';

const Button = ({ text, onClick }) => (
  <button
    className="button"
    onClick={() => onClick()}
    type="button"
  >
    {text}
  </button>
);

Button.propTypes = ButtonTypes;

export default Button;
