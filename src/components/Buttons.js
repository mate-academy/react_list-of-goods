import React from 'react';
import PropTypes from 'prop-types';

const Buttons = (
  {
    handleReverse,
    handleOnAlphabetSort,
    handleLengthSort,
    handleReset,
  },
) => (
  <div>
    <button
      type="button"
      onClick={handleReverse}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={handleOnAlphabetSort}
    >
      Sort on alphabetical order
    </button>
    <button
      type="button"
      onClick={handleLengthSort}
    >
      Sort by length
    </button>
    <button
      type="button"
      onClick={handleReset}
    >
      Reset
    </button>
  </div>
);

Buttons.propTypes = {
  handleReverse: PropTypes.func.isRequired,
  handleOnAlphabetSort: PropTypes.func.isRequired,
  handleLengthSort: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Buttons;
