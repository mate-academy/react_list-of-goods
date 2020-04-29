import React from 'react';
import './SelectList.scss';
import PropTypes from 'prop-types';
import SelectListItem from '../SelectListItem/SelectListItem';

const SelectList = ({ numbers, callback, value }) => (
  <select
    name="nm"
    id="sl"
    onChange={callback}
    value={value}
  >
    {numbers.map(num => <SelectListItem num={num} key={num} />)}
  </select>
);

SelectList.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  callback: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default SelectList;
