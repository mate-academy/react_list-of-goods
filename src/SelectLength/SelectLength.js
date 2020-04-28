import React from 'react';
import PropTypes from 'prop-types';

export const SelectLength = ({ filterByLength }) => (
  <select
    defaultValue="1"
    onChange={filterByLength}
  >
    {Array(10)
      .fill('')
      .map((el, i) => (
        <option value={i + 1}>{i + 1}</option>
      ))
    }
  </select>
);

SelectLength.propTypes = {
  filterByLength: PropTypes.func.isRequired,
};
