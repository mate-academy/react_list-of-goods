import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({
  goodsList,
  reverse,
  sortAlphabet,
  reset,
  sortByLength,
}) => (

  <div>
    <button
      type="button"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={sortAlphabet}
    >
      Sort alphabetically
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

    <ul>
      {goodsList.map(product => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  reverse: PropTypes.func.isRequired,
  sortAlphabet: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};
