import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ innerText, action }) => (
  <button
    type="button"
    className="btn btn-primary"
    onClick={action}
  >
    {innerText}
  </button>
);

Button.propTypes = {
  innerText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
