import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from '../../constants/proptypes';

import './Button.css';

const Button = ({ text, listOfGoods, onClick }) => {
  const classes = classNames({
    'btn btn-primary': true,
    'btn--start': text === 'Start',
  });

  return (
    <button
      className={classes}
      type="button"
      onClick={() => onClick(listOfGoods)}
    >
      {text}
    </button>
  );
};

Button.propTypes = ButtonProps;

export default Button;
