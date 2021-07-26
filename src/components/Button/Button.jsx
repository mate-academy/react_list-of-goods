import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export const Button = React.memo(
  ({ onClick, name }) => (
    <button
      type="button"
      className="Button"
      onClick={onClick}
    >
      {name}
    </button>
  ),
);

Button.defaultProps = {
  onClick: null,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
