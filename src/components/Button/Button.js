import React from 'react';
import './Button.scss';
import { ButtonTypes } from '../../constants/proptypes';

const Button = (props) => {
  const { text, onClick } = props;

  return (
    <button
      className="button"
      onClick={() => onClick()}
      type="button"
    >
      {text}
    </button>
  );
};

Button.propTypes = ButtonTypes;

export default Button;
