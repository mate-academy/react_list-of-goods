import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Select = ({ onChange, id }) => {
  const lengthOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <select onChange={onChange} value={id}>
      {lengthOptions.map(item => (
        <option key={nanoid()}>
          {item}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
