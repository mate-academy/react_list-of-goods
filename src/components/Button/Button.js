import React from 'react';
import PropTypes from 'prop-types';

export const Button = React.memo(({ text, callback }) => (
  <button
    type="button"
    onClick={callback}
  >
    {text}
  </button>
));

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
