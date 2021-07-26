import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ callback, text }) => (
  <button
    type="button"
    onClick={callback}
    className="button"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default React.memo(Button);
