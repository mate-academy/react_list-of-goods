import React from 'react';
import { ButtonsShapes } from '../Shapes/Shapes';

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
    <div className="buttons">
      <button
        type="button"
        onClick={reverse}
      >
        Reverse
      </button>
      <button
        type="button"
        onClick={alphabetSort}
      >
        A-Z sort
      </button>
      <button
        type="button"
        onClick={lengthSort}
      >
        Length sort
      </button>
      <button
        type="button"
        onClick={reset}
      >
        Reset
      </button>
      <select onChange={lengthFilter} value={value}>
        {
          select.map(item => (
            <option key={item} value={item}>{item}</option>
          ))
        }
      </select>
    </div>
  );
};

Buttons.propTypes = ButtonsShapes.isRequired;
