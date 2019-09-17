import React from 'react';
import { ButtonProps } from '../../PropValues/propTypes';
import './Buttons.css';

const Button = ({ text, listOfGoods, onClick }) => {
  const btn = () => ({
    'btn btn-primary': true,
    'btn--start': text === 'Start',
  });

  return (
    <button
      className={btn}
      type="button"
      onClick={() => onClick(listOfGoods)}
    >
      {text}
    </button>
  );
};

Button.propTypes = ButtonProps;
export default Button;
