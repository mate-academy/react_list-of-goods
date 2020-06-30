import React from 'react';
import PropTypes from 'prop-types';
import { LengthFilter } from '../LengthFilter/LengthFilter';

export const Actions = ({
  reverseList,
  sortByName,
  reset,
  sortByLength,
  handleLengthSelection,
  minLength,
}) => (
  <div>
    <button
      type="button"
      onClick={reverseList}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={sortByName}
    >
      Alphabetically
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
      Length
    </button>
    <LengthFilter
      onChange={handleLengthSelection}
      minLength={minLength}
    />
  </div>
);

Actions.propTypes = {
  reverseList: PropTypes.func.isRequired,
  sortByName: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  handleLengthSelection: PropTypes.func.isRequired,
  minLength: PropTypes.number.isRequired,
};
