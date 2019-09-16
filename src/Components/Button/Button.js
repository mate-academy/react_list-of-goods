import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const { onClick, className, name } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
