import React from 'react';
import './Buttons.css';
import { ButtonsTypes } from '../Shape/Shape';

export const Buttons = (props) => {
  const {
    reverse,
    alphabet,
    reset,
    byLength,
    selectNumber,
    defaultSelect,
  } = props;

  return (
    <div className="buttons">
      <button
        type="button"
        className="btn btn-info"
        onClick={reverse}
      >
        Reverse
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={alphabet}
      >
        Sort alphabetically
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={reset}
      >
        Reset
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={byLength}
      >
        Sort by length
      </button>
      <select
        className="form-control"
        id="exampleSelect1"
        name="select"
        value={defaultSelect}
        onChange={selectNumber}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </div>
  );
};

Buttons.propTypes = ButtonsTypes;
