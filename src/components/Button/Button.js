import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;

Button.propTypes = {
  title: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
