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
      {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], item => (
        <option value={item} key={item}>{item}</option>
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
