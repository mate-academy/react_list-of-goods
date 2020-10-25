import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import './LengthSelect.css';

export const LengthSelect = ({ handleChange, value }) => {
  const optionsOfLength = [];

  for (let i = 1; i <= 10; i += 1) {
    optionsOfLength.push({
      value: i,
      label: i,
    });
  }

  return (
    <Select
      className="LengthSelect"
      value={value}
      onChange={handleChange}
      options={optionsOfLength}
    />
  );
};

LengthSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.number.isRequired,
  }).isRequired,
};
