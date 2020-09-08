import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({ reverse, sortAlphabetically, reset, sortBySize }) => (
  <>
    <button
      type="button"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={sortAlphabetically}
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
      onClick={sortBySize}
    >
      Sort by length
    </button>
  </>
);

Buttons.propTypes = {
  reset: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  sortBySize: PropTypes.func.isRequired,
};
