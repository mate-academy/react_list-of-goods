import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    type="button"
    className={`btn btn-${props.type} btn-${props.size} mb-2`}
    onClick={props.handleClick}
  >
    {props.children}
  </button>
);

export { Button };

Button.defaultProps = {
  type: 'light',
  size: 'btn-md',
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};
