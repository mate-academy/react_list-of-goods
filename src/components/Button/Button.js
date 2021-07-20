import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ title, onClick, isHidden }) => (
  <button
    type="button"
    onClick={onClick}
    hidden={isHidden}
  >
    {title}
  </button>
);

export default Button;

Button.propTypes = {
  title: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  isHidden: propTypes.bool,
};

Button.defaultProps = {
  isHidden: false,
};
