import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({ reverseBtn, sortBtn, sortLengthBtn, resetBtn }) => (
  <React.Fragment>
    <button
      type="button"
      onClick={reverseBtn}
    >
     Reverse
    </button>
    <button
      type="button"
      onClick={sortBtn}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      onClick={resetBtn}
    >
      reset
    </button>
    <button
      type="button"
      onClick={sortLengthBtn}
    >
      Sort by length
    </button>
  </React.Fragment>
);

Buttons.propTypes = {
  reverseBtn: PropTypes.func.isRequired,
  sortBtn: PropTypes.func.isRequired,
  sortLengthBtn: PropTypes.func.isRequired,
  resetBtn: PropTypes.func.isRequired,
};
