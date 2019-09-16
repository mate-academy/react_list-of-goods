import React from 'react';
import './Select.scss';
import { SelectTypes } from '../../constants/proptypes';

const Select = ({ list, selected, onChange }) => (
  <select className="select" onChange={e => onChange(e.target.value)}>
    {list.map(item => (
      <option value={item.value} selected={item.value === selected}>
        {item.name}
      </option>
    ))}
  </select>
);

Select.propTypes = SelectTypes;

export default Select;
