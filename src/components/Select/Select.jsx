import React from 'react';
import SelectPropTypes from './SelectPropTypes';

const Select = ({ onChange, list, value }) => (
  <select
    value={value}
    onChange={onChange}
  >
    {list.map((item, index) => (
      <option
        key={item}
      >
        {(index + 1)}
      </option>
    ))}
  </select>
);

Select.propTypes = SelectPropTypes;

export default Select;
