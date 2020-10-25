import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

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
      value={value}
      onChange={handleChange}
      options={optionsOfLength}
    />
  );
};

LengthSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
