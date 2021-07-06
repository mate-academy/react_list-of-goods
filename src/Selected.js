import React from 'react';
import PropTypes from 'prop-types';

const Selected = ({ selected, defaultValue }) => (
  <select
    value={defaultValue}
    onChange={event => selected(event.target.value)}
  >
    {Array(10)
      .fill('')
      .map((i, index) => (
        <option key={index} value={index + 1}>{index + 1}</option>
      ))}
  </select>
);

Selected.propTypes = {
  selected: PropTypes.func.isRequired,
  defaultValue: PropTypes.number.isRequired,
};

export default Selected;
