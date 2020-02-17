import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable-next-line */
const Actions = ({ value, handleSelect, handleReverse, handleSortAbc, handleSortLength, handleReset }) => (
  <div className="actions">
    <select className="select" value={value} onChange={handleSelect}>
      <option value="1" key={1}>{1}</option>
      <option value="2" key={2}>{2}</option>
      <option value="3" key={3}>{3}</option>
      <option value="4" key={4}>{4}</option>
      <option value="5" key={5}>{5}</option>
      <option value="6" key={6}>{6}</option>
      <option value="7" key={7}>{7}</option>
      <option value="8" key={8}>{8}</option>
      <option value="9" key={9}>{9}</option>
      <option value="10" key={10}>{10}</option>
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
