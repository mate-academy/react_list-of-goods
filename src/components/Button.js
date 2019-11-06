import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ func, name }) => (
  <button type="button" onClick={func}>
    {name}
  </button>
);

Button.propTypes = {
  func: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
