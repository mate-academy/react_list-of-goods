import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ clicked, text }) => (
  <button
    onClick={clicked}
    type="button"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Button;
