import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({ reverse, sortByAlphabet, sortByLength, reset }) => (
  <div className="buttons-wrapper">
    <button
      className="button"
      type="button"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      className="button"
      type="button"
      onClick={sortByAlphabet}
    >
      Sort alphabetically
    </button>
    <button
      className="button"
      type="button"
      onClick={reset}
    >
      Reset
    </button>
    <button
      className="button"
      type="button"
      onClick={sortByLength}
    >
      Sort by length
    </button>
  </div>
);

Buttons.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
