import React from 'react';
import './SelectListItem.scss';
import PropTypes from 'prop-types';

const SelectListItem = ({ num }) => (
  <option defaultValue="1" value={num}>{num}</option>
);

SelectListItem.propTypes = {
  num: PropTypes.number.isRequired,
};

export default SelectListItem;
