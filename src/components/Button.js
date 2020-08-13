import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, handleClick }) => (
  <button
    className="goods__button"
    type="button"
    onClick={handleClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
