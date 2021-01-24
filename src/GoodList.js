import React from 'react';
import PropTypes from 'prop-types';

const GoodList = (
  { goodsList, reverse, sortByAlphabet, sortByLength, reset },
) => (
  <div>
    <button
      type="button"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={sortByAlphabet}
    >
      Sort By Alphabet
    </button>
    <button
      type="button"
      onClick={sortByLength}
    >
      Sort By Length
    </button>
    <button
      type="button"
      onClick={reset}
    >
      Reset
    </button>
    <ul>
      {goodsList.map(item => (
        <li>
          {item}
        </li>
      ))}
    </ul>

  </div>
);

GoodList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  reverse: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default GoodList;
