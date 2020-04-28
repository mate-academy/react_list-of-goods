import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, action }) => (
  <button
    type="button"
    className="button"
    onClick={() => action()}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
