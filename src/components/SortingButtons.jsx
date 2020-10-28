import React from 'react';
import PropTypes from 'prop-types';

export function SortingButtons({ reverseList, sortByAlphabet, sortByLength }) {
  return (
    <>
      <button
        type="button"
        onClick={reverseList}
        className="ui secondary button"
      >
        Reverse
      </button>

      <button
        type="button"
        onClick={sortByAlphabet}
        className="ui secondary button"
      >
        Sort alphabetically
      </button>

      <button
        type="button"
        onClick={sortByLength}
        className="ui secondary button"
      >
        Sort by length
      </button>
    </>
  );
}

SortingButtons.propTypes = {
  reverseList: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};
