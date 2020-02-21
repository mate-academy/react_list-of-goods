import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({
  handleReverse,
  handleAlphabetSort,
  handleLengthSort,
  handleReset,
}) => (
  <>
    <button
      type="button"
      onClick={handleReverse}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={handleAlphabetSort}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      onClick={handleReset}
    >
      reset
    </button>
    <button
      type="button"
      onClick={handleLengthSort}
    >
      Sort by length
    </button>
  </>
);

Buttons.propTypes = {
  handleReverse: PropTypes.func.isRequired,
  handleAlphabetSort: PropTypes.func.isRequired,
  handleLengthSort: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
