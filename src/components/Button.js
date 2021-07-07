import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name, handler }) => (
  <button
    type="button"
    className="button"
    onClick={handler}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
