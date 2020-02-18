import React from 'react';
import PropTypes from 'prop-types';

export const SortButtons = (
  {
    hideList,
    reverse,
    sortAlphabetically,
    reset, sortByLength,
    filterByLength,
  },
) => (
  <>
    <button type="button" onClick={hideList}>
      Hide
    </button>
    <button type="button" onClick={reverse}>
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
    <select onChange={filterByLength}>
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
  hideList: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  filterByLength: PropTypes.func.isRequired,
};
