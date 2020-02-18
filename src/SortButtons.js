import React from 'react';
import PropTypes from 'prop-types';

export const SortButtons = ({
  handleHide,
  handleReverse,
  sortAlphabetically,
  reset, sortByLength,
  filterByLength,
  defaultLength,
}) => (
  <>
    <button type="button" onClick={handleHide}>
      Hide
    </button>
    <button type="button" onClick={handleReverse}>
      Reverse
    </button>
    <button type="button" onClick={sortAlphabetically}>
      Sort alphabetically
    </button>
    <button type="button" onClick={reset}>
      Reset
    </button>
    <button type="button" onClick={sortByLength}>
      Sort by length
    </button>
    <select onChange={filterByLength} value={defaultLength}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </>
);

SortButtons.propTypes = {
  handleHide: PropTypes.func.isRequired,
  handleReverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  filterByLength: PropTypes.func.isRequired,
  defaultLength: PropTypes.number.isRequired,
};
