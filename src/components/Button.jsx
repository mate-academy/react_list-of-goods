import React from 'react';
import PropTypes from 'prop-types';

export function Button({ clickButton, text }) {
  return (
    <button
      type="button"
      onClick={clickButton}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  clickButton: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
