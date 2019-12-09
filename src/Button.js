import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handler, title }) => (
  <button
    type="button"
    className="button"
    onClick={handler}
  >
    {title}
  </button>
);

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
