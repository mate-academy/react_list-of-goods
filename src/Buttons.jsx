import React from 'react';
import propTypes from 'prop-types';

export const Buttons = ({ selectorValues, value, reverse, sortAlphabetically,
  sortByName, reset, handleChange }) => (

    <div className="btn__row">
      <button
        className="btn btn-success"
        type="button"
        onClick={reverse}
      >
        Reverse
      </button>
      <button
        className="btn btn-success"
        type="button"
        onClick={sortAlphabetically}
      >
        Sort alphabetically
      </button>
      <button
        className="btn btn-success"
        type="button"
        onClick={sortByName}
      >
        Sort by name length
      </button>
      <button
        className="btn btn-danger"
        type="button"
        onClick={reset}
      >
        Reset
      </button>
      <select value={value} onChange={handleChange}>
        {selectorValues.map(selectorValue => (
          <option value={selectorValue} key={selectorValue}>
            {selectorValue}
          </option>
        ))}
      </select>
    </div>
);

Buttons.propTypes = {
  selectorValues: propTypes.arrayOf(propTypes.number).isRequired,
  value: propTypes.number.isRequired,
  reverse: propTypes.func.isRequired,
  sortAlphabetically: propTypes.func.isRequired,
  sortByName: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
};
