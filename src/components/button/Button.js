import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

export const Button = React.memo(({ onClick, text, className }) => (
  <button
    className={className}
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
));

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
