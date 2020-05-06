import React from 'react';
import PropTypes from 'prop-types';

const Buttons = (
  {
    handleReverse,
    handleSortInAlphabet,
    handleSortByLength,
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
      onClick={handleSortInAlphabet}
    >
      Sort in Alphabetical Order
    </button>
    <button
      type="button"
      onClick={handleSortByLength}
    >
      Sort by Length
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
  handleSortInAlphabet: PropTypes.func.isRequired,
  handleSortByLength: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Buttons;
