import React from 'react';
import PropTypes from 'prop-types';

const ControlButtons = ({
  handleReverse, handleSort, handleReset, handleSortByLength,
}) => (
  <div className="goods__conrol-buttons">
    <button
      onClick={handleReverse}
      type="button"
      className="goods__conrol-button btn btn-secondary"
    >
        Reverse
    </button>
    <button
      onClick={handleSort}
      type="button"
      className="goods__conrol-button btn btn-secondary"
    >
        Sort alphabetically
    </button>
    <button
      type="button"
      onClick={handleReset}
      className="goods__conrol-button btn btn-secondary"
    >
        Reset
    </button>
    <button
      type="button"
      onClick={handleSortByLength}
      className="goods__conrol-button btn btn-secondary"
    >
        Sort by length
    </button>
  </div>
);

ControlButtons.propTypes = {
  handleReverse: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSortByLength: PropTypes.func.isRequired,
};

export default ControlButtons;
