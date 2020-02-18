import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({
  value,
  handleSelect,
  handleReverse,
  handleSortAbc,
  handleSortLength,
  handleReset,
}) => (
  <div className="actions">
    <select className="select" value={value} onChange={handleSelect}>
      {Array.from({ length: 10 }, (v, item) => (
        <option value={item + 1} key={item + 1}>{item + 1}</option>
      ))}
    </select>
    <button className="button" type="button" onClick={handleReverse}>
      Reverse
    </button>
    <button className="button" type="button" onClick={handleSortAbc}>
      Sort alphabetically
    </button>
    <button className="button" type="button" onClick={handleSortLength}>
      Sort by length
    </button>
    <button className="button" type="button" onClick={handleReset}>
      Reset
    </button>
  </div>
);

Actions.propTypes = {
  value: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleReverse: PropTypes.func.isRequired,
  handleSortAbc: PropTypes.func.isRequired,
  handleSortLength: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Actions;
