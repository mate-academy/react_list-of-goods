import React from 'react';
import './Buttons.css';
import { ButtonsTypes } from '../Shape/Shape';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

export const Buttons = (props) => {
  const {
    onReverse,
    onAlphabet,
    onReset,
    onByLength,
    onSelectNumber,
    onDefaultSelect,
  } = props;
  const buttonClass = 'btn btn-info';

  return (
    <div className="buttons">
      <Button className={buttonClass} action={onReverse} text="Reverse" />
      <Button
        className={buttonClass}
        action={onAlphabet}
        text="Sort alphabetically"
      />
      <Button className={buttonClass} action={onReset} text="Reset" />
      <Button
        className={buttonClass}
        action={onByLength}
        text="Sort by length"
      />
      <Select value={onDefaultSelect} action={onSelectNumber} />
    </div>
  );
};

Buttons.propTypes = ButtonsTypes;
