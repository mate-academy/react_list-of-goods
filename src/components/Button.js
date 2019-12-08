import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button
    className="goods__button"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
