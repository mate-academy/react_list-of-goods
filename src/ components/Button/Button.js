import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export function Button({ onClick, text }) {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
