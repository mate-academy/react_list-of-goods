import React from 'react';
import PropTypes from 'prop-types';

const arrLength = Array.from(Array(10).keys());

export const Select = ({ onChange, value }) => (
  <select name="select" onChange={onChange} value={value}>
    {arrLength.map(length => (
      <option key={length} value={length + 1}>
        {`Length ${length + 1}`}
      </option>
    ))
    }
  </select>
);

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
