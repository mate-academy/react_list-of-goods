import React from 'react';
import './Buttons.css';
import { ButtonsTypes } from '../Shape/Shape';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

export const Buttons = (props) => {
  const {
    reverse,
    alphabet,
    reset,
    byLength,
    selectNumber,
    defaultSelect,
  } = props;
  const bClass = 'btn btn-info';

  return (
    <div className="buttons">
      <Button classN={bClass} func={reverse} text="Reverse" />
      <Button classN={bClass} func={alphabet} text="Sort alphabetically" />
      <Button classN={bClass} func={reset} text="Reset" />
      <Button classN={bClass} func={byLength} text="Sort by length" />
      <Select value={defaultSelect} func={selectNumber} />
    </div>
  );
};

Buttons.propTypes = ButtonsTypes;
