import React from 'react';
import { ButtonsShapes } from '../Shapes/Shapes';
import './Buttons.css';

const select = [];

for (let i = 1; i < 11; i += 1) {
  select.push(i);
}

export const Buttons = (props) => {
  const {
    reverse,
    alphabetSort,
    lengthSort,
    reset,
    lengthFilter,
    value,
  } = props;

  return (
    <>
      <div className="buttons">
        <button
          type="button"
          onClick={reverse}
          className="btn btn-light btn-sm button"
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={alphabetSort}
          className="btn btn-light btn-sm button"
        >
          A-Z sort
        </button>
        <button
          type="button"
          onClick={lengthSort}
          className="btn btn-light btn-sm button"
        >
          Length sort
        </button>
        <button
          type="button"
          onClick={reset}
          className="btn btn-light btn-sm button"
        >
          Reset
        </button>
      </div>
      <select
        onChange={lengthFilter}
        value={value}
        className="select"
      >
        {
          select.map(item => (
            <option key={item} value={item}>{item}</option>
          ))
        }
      </select>
    </>
  );
};

Buttons.propTypes = ButtonsShapes.isRequired;
