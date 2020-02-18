import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ clickHandler, children }) => (
  <button
    className="button"
    type="button"
    onClick={clickHandler}
  >
    {children}
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
