import React from 'react';
import { ButtonProps } from '../../constants/proptypes';

import './Button.css';

const Button = (props) => {
  const { text, listOfGoods, onClick } = props;

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => onClick(listOfGoods)}
    >
      {text}
    </button>
  );
};

Button.propTypes = ButtonProps;

export default Button;
