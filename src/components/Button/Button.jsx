import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = React.memo(
  ({ wasStarted, text, call }) => (
    <button
      type="button"
      className="Button"
      hidden={wasStarted}
      onClick={call}
    >
      {text}
    </button>
  ),
);

Button.propTypes = {
  call: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  wasStarted: PropTypes.bool.isRequired,
};
