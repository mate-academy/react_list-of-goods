import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = (
  {
    reverseGoods,
    sortAlphabetically,
    reset,
    sortByLength,
    handleChangeSelect,
    handleValue,
  },
) => (
  <>
    <button
      type="button"
      onClick={reverseGoods}
    >
                Reverse
    </button>
    <button
      type="button"
      onClick={sortAlphabetically}
    >
                Sort Alphabetically
    </button>
    <button
      type="button"
      onClick={reset}
    >
                Reset
    </button>
    <button
      type="button"
      onClick={sortByLength}
    >
                Sort by length
    </button>
    <select
      value={handleValue}
      onChange={handleChangeSelect}
    >
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

Buttons.propTypes = {
  reverseGoods: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
  handleValue: PropTypes.number.isRequired,
};
