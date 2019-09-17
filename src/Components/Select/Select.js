import React from 'react';
import './Select.css';
import { SelectProps } from 'prop-types';

const Select = (props) => {
  const { selectedByDefault, onChange } = props;

  return (
    <div className="select-container">
      <h2>Select:</h2>
      <select
        className="goods-select"
        value={selectedByDefault}
        onChange={event => onChange(event)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

Select.propTypes = SelectProps;

export default Select;
