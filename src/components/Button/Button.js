import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, handler }) => (
  <button
    type="button"
    onClick={handler}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
