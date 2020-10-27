import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const CustomSelect = ({ length, func }) => (
  <Select
    className="select"
    value={length}
    onChange={e => func(e.target)}
  >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={6}>6</MenuItem>
    <MenuItem value={7}>7</MenuItem>
    <MenuItem value={8}>8</MenuItem>
    <MenuItem value={9}>9</MenuItem>
    <MenuItem value={10}>10</MenuItem>
  </Select>
);

CustomSelect.propTypes = {
  length: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired,
};

export default CustomSelect;
