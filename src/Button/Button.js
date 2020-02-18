import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ onClick, children }) => (
  <button
    className="button"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
