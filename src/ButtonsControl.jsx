import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const ButtonsControl = (
  {
    listOfGoods,
    reverse,
    setSortByAlphabet,
    setSortByLength,
    reset,
    setLength,
    length,
  },
) => (
  <>
    <Button
      onClickFunction={reverse}
      type="primary"
      text="Reverse"
    />
    <Button
      onClickFunction={setSortByAlphabet}
      type="primary"
      text="Sort alphabetically"
    />
    <Button
      onClickFunction={reset}
      type="primary"
      text="Reset"
    />
    <Button
      onClickFunction={setSortByLength}
      type="primary"
      text="Sort by length"
    />
    <select
      className="form-select"
      id="inputGroupSelect01"
      value={length}
      onChange={event => setLength(event)}
      style={{
        width: '100px',
        display: 'inline-block',
      }}
    >
      {listOfGoods.map((goods, index) => (
        <option key={goods} value={index + 1}>{index + 1}</option>
      ))}
    </select>
  </>
);

ButtonsControl.propTypes = {
  listOfGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.func.isRequired,
  setSortByAlphabet: PropTypes.func.isRequired,
  setSortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  setLength: PropTypes.func.isRequired,
  length: PropTypes.func.isRequired,
};
