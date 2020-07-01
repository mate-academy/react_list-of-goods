import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ onChange, value }) => (
  <select
    onChange={event => onChange(event)}
    value={value}
  >
    {
      Array.from(Array(10), (_, i) => i + 1)
        .map(element => (<option key={element}>{element}</option>))
    }
  </select>
);

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
