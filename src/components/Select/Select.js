import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ callback, selectedOption }) => (
  <select
    name="select"
    onChange={callback}
    value={selectedOption}
  >
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
    <option value={6}>6</option>
    <option value={7}>7</option>
    <option value={8}>8</option>
    <option value={9}>9</option>
    <option value={10}>10</option>
  </select>
);

Select.defaultProps = {
  callback: {},
  selectedOption: 1,
};

Select.propTypes = {
  callback: PropTypes.func,
  selectedOption: PropTypes.number,
};

export default Select;
