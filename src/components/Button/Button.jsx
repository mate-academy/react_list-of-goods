import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = React.memo(
  ({ wasStarted, text, action }) => (
    <button
      type="button"
      className="Button"
      hidden={wasStarted}
      onClick={action}
    >
      {text}
    </button>
  ),
);

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  wasStarted: PropTypes.bool.isRequired,
};
