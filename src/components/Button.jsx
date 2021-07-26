import React from 'react';
import PropTypes from 'prop-types';

export const Button = React.memo(
  ({ classes, text, action }) => (
    <button
      className={classes}
      onClick={action}
      type="button"
    >
      {text}
    </button>
  ),
);

Button.propTypes = {
  classes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
