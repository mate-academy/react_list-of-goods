import React from 'react';
import PropTypes from 'prop-types';

const Button = React.memo(
  ({ text, onClick }) => (
    <button
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  ),
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default Button;
