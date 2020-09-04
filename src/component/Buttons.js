import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({ reverse, sortABC, reset, sortBySize }) => (
  <>
    <button
      type="button"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={sortABC}
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
  sortABC: PropTypes.func.isRequired,
  sortBySize: PropTypes.func.isRequired,
};
