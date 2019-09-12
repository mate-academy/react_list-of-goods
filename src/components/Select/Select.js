import React from 'react';
import './Select.scss';
import { SelectTypes } from '../../constants/proptypes';

const Select = (props) => {
  const { list, selected, onChange } = props;

  return (
    <select className="select" onChange={e => onChange(e)}>
      {list.map(item => (
        <option value={item.val} selected={item.val === selected}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = SelectTypes;

export default Select;
