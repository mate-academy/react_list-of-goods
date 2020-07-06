import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const Select = ({ isStart, selectValue, filterLength }) => (
  <select
    className="App__select"
    hidden={!isStart}
    value={selectValue}
    onChange={filterLength}
  >
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
  </select>
);

export default Select;

Select.propTypes = {
  isStart: PropTypes.bool.isRequired,
  selectValue: PropTypes.number.isRequired,
  filterLength: PropTypes.func.isRequired,
};
