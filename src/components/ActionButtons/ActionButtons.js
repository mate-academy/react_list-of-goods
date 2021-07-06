import React from 'react';
import PropType from 'prop-types';
import { Button } from '../Button/Button';
import { SelectLength } from '../SelectLength/SelectLength';
import './ActionButtons.css';

export const ActionButtons = ({
  selectValue,
  handleReverseOrder,
  handleAlphabeticallyOrder,
  handleLengthOrder,
  handleSelectLength,
  handleReset,
}) => (
  <div className="goods__sort">
    <Button
      handle={handleReverseOrder}
      name="Reverse"
    />
    <Button
      handle={handleLengthOrder}
      name="Sort by length"
    />
    <Button
      handle={handleAlphabeticallyOrder}
      name="Sort alphabetically"
    />
    <SelectLength
      selectValue={selectValue}
      handle={handleSelectLength}
    />
    <Button
      handle={handleReset}
      name="Reset"
    />
  </div>
);

ActionButtons.propTypes = {
  selectValue: PropType.number.isRequired,
  handleReverseOrder: PropType.func.isRequired,
  handleAlphabeticallyOrder: PropType.func.isRequired,
  handleLengthOrder: PropType.func.isRequired,
  handleSelectLength: PropType.func.isRequired,
  handleReset: PropType.func.isRequired,
};
