import React from 'react';
import PropTypes from 'prop-types';

export const Actions = ({
  reverseList,
  sortByAlphabet,
  resetList,
  sortByLength,
}) => (
  <>
    <button
      type="button"
      onClick={reverseList}
    >
      ReverseList
    </button>

    <button
      type="button"
      onClick={sortByAlphabet}
    >
      sortByAlphabet
    </button>

    <button
      type="button"
      onClick={resetList}
    >
      resetList
    </button>

    <button
      type="button"
      onClick={sortByLength}
    >
      SortByLength
    </button>
  </>
);

Actions.propTypes = {
  reverseList: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};
