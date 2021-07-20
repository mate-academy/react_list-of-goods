import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default React.memo(Button);
