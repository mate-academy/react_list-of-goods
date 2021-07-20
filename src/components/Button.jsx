import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ buttonName, handler }) => (
  <button
    type="button"
    onClick={handler}
  >
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
