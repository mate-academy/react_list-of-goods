import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

export const Buttons = (
  { handleReverse, sortedAlphabetically, handleReset, sortedByLength },
) => (
  <>
    <button
      type="button"
      className="button"
      onClick={handleReverse}
    >
      Reverse
    </button>
    <button
      type="button"
      className="button"
      onClick={sortedAlphabetically}
    >
    Sort alphabetically
    </button>
    <button
      type="button"
      className="button"
      onClick={handleReset}
    >
    Reset
    </button>
    <button
      type="button"
      className="button"
      onClick={sortedByLength}
    >
    Sort by length
    </button>
  </>
);

Buttons.propTypes = {
  handleReverse: PropTypes.func.isRequired,
  sortedAlphabetically: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  sortedByLength: PropTypes.func.isRequired,
};
