import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, name }) => (
  <button
    onClick={onClick}
    type="submit"
  >
    {name}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
