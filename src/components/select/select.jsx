import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ onChange, id }) => {
  const minLength = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <select onChange={onChange} value={id}>
      {minLength.map(item => (
        <option key={item}>
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
