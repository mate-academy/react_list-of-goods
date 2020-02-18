import React from 'react';
import PropTypes from 'prop-types';
import './Controls.scss';
import uuid from 'uuid';

export const Controls = (
  { reversed,
    sortedAlpha,
    resetedGoods,
    sortByLength,
    selectAction,
    length,
    selectedArray },
) => (
  <div className="controls">
    <button
      type="button"
      className="controls__button"
      onClick={reversed}
    >
  Reverse
    </button>
    <button
      type="button"
      className="controls__button"
      onClick={sortedAlpha}
    >
Sort Alpha
    </button>
    <button
      type="button"
      className="controls__button"
      onClick={resetedGoods}
    >
Reset
    </button>
    <button
      type="button"
      className="controls__button"
      onClick={sortByLength}
    >
Sort by length
    </button>
    <select className="select" value={length} onChange={selectAction}>
      {selectedArray.map((item, index) => (
        <option key={uuid.v4()} value={index + 1}>{index + 1}</option>
      ))}
    </select>
  </div>
);

Controls.propTypes = {
  reversed: PropTypes.func.isRequired,
  sortedAlpha: PropTypes.func.isRequired,
  resetedGoods: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  selectAction: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  selectedArray: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
