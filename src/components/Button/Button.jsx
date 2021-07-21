import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ onClick, text, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={className}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};
