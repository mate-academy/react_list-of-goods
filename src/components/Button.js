import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, text }) => (
  <button
    type="button"
    onClick={onClick}
    className="btn btn-dark"
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
