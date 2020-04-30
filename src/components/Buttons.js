import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = (
  { reverse,
    sortAlphabetically,
    sortByLength,
    reset,
    sortSelectLength,
    selectValues,
    defaultValue },
) => (
  <>
    <button type="button" onClick={reverse}>
      Reverse
    </button>
    <button type="button" onClick={sortAlphabetically}>
      Sort alphabetically
    </button>
    <button type="button" onClick={sortByLength}>
      Sort by length
    </button>
    <button type="button" onClick={reset}>
      Reset
    </button>
    <select
      name="select"
      onChange={event => sortSelectLength(event.target.value)}
      value={defaultValue}
    >
      {selectValues.map(el => (
        <option value={el} key={el}>
          {el}
        </option>
      ))}
    </select>
  </>
);

Buttons.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortSelectLength: PropTypes.func.isRequired,
  selectValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  defaultValue: PropTypes.number.isRequired,
};
