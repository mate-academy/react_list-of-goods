import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export const Button = React.memo(
  ({ onClick, text }) => (
    <button
      className="btn"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  ),
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
