import React from 'react';
import PropTypes from 'prop-types';

export const SortButtons
= ({ sortAplhBtn, sortLengthBtn, reverseBtn, resetBtn }) => (
  <>
    <button
      type="button"
      className="button"
      onClick={sortLengthBtn}
    >
      Sort by length
    </button>
    <button
      type="button"
      className="button"
      onClick={sortAplhBtn}
    >
      Sort by Aplhabet
    </button>
    <button
      type="button"
      className="button"
      onClick={reverseBtn}
    >
      Reverse
    </button>
    <button
      type="button"
      className="button"
      onClick={resetBtn}
    >
      Reset parametrs
    </button>
  </>
);

SortButtons.propTypes = {
  resetBtn: PropTypes.func.isRequired,
  reverseBtn: PropTypes.func.isRequired,
  sortAplhBtn: PropTypes.func.isRequired,
  sortLengthBtn: PropTypes.func.isRequired,
};
