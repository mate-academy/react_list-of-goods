import React from 'react';
import './SelectList.scss';
import PropTypes from 'prop-types';
import SelectListItem from '../SelectListItem/SelectListItem';

const SelectList = ({ numbers, callback }) => (
  <select name="nm" id="sl" defaultValue="1" onChange={callback}>
    {numbers.map(num => <SelectListItem num={num} key={num} />)}
  </select>
);

SelectList.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  callback: PropTypes.func.isRequired,
};

export default SelectList;
