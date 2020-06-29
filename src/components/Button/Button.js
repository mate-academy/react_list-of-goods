import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ handleClick, text }) => (
  <button
    className="button"
    type="button"
    onClick={handleClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
