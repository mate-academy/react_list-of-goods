import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClickFunction, type, text }) => (
  <button
    type="button"
    className={`button btn btn-outline-${type}`}
    onClick={onClickFunction}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
