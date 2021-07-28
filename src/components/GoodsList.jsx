import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList
  = (
    { visibleGoods, sortAlphabetically, reverse, start, reset, sortByLength },
  ) => (
    <>
      <ul>
        {visibleGoods.map(good => (
          <li key={good}>{good}</li>
        ))}
      </ul>
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
    </>
  );

GoodsList.propTypes = {
  visibleGoods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  start: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};
