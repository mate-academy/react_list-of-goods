import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onclick }) => (
  <button
    className="app__button"
    type="button"
    onClick={onclick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Button;
