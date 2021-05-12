import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label, clickHandler }) => (
  <button
    type="button"
    onClick={clickHandler}
  >
    { label }
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  label: '',
};
