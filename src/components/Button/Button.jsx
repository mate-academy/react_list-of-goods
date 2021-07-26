import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, text, className }) => (
  <button
    type="button"
    className={`button ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
