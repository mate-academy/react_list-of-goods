import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, name, className }) => (
  <button type="button" onClick={onClick} name={name} className={className}>
    {name}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};
