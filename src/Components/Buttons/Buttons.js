import React from 'react';
import { ButtonProps } from '../../PropValues/propTypes';
import './Buttons.css';

const Buttons = ({ text, listOfGoods, onClick }) => {
  const btn = () => ({
    text: 'Start',
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

Buttons.propTypes = ButtonProps;

export default Buttons;
