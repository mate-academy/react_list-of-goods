import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Button.scss';

const Button = ({ text, action, visible }) => (
  <button
    type="button"
    className={cn('button', { 'button--hide': !visible })}
    onClick={() => action()}
  >
    {text}
    {visible}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Button;
