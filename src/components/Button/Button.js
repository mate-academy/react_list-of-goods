import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ name, handler }) => (
  <button
    type="button"
    className="page__button"
    onClick={handler}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export { Button };
