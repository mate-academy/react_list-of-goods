import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ callback, text }) => (
  <button type="button" onClick={callback}>
    {text}
  </button>
);

Button.defaultProps = {
  callback: {},
  text: '',
};

Button.propTypes = {
  callback: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
