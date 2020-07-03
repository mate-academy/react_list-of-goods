import React from 'react';
import PropTypes from 'prop-types';

export const Actions = ({
  reverseList,
  sortByAlphabet,
  resetList,
  sortByLength,
  lengthSelect,
  minLength,
}) => (
  <>
    <div className="buttons">
      <button
        className="button"
        type="button"
        onClick={reverseList}
      >
        ReverseList
      </button>

      <button
        className="button"
        type="button"
        onClick={sortByAlphabet}
      >
        SortByAlphabet
      </button>

      <button
        className="button"
        type="button"
        onClick={resetList}
      >
        ResetList
      </button>

      <button
        className="button"
        type="button"
        onClick={sortByLength}
      >
        SortByLength
      </button>
    </div>
  </>
);

Actions.propTypes = {
  reverseList: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  lengthSelect: PropTypes.func.isRequired,
  minLength: PropTypes.number.isRequired,
};
