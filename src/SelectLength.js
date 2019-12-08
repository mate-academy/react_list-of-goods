import React from 'react';
import PropTypes from 'prop-types';

const SelectLength = props => (
  <select
    className="goods__select button"
    onChange={props.sortSelect}
  >
    {[...Array(10)].map((i, index) => (
      <option>{index + 1}</option>
    ))}
  </select>
);

SelectLength.propTypes = { sortSelect: PropTypes.func.isRequired };

export default SelectLength;
