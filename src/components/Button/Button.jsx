import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {title}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
