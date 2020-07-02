import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    type="button"
    className={`btn btn-${props.color} btn-${props.size} mb-2`}
    onClick={props.handleClick}
  >
    {props.children}
  </button>
);

export { Button };

Button.defaultProps = {
  color: 'light',
  size: 'btn-md',
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};
