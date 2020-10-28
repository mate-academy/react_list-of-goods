import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

export const Select = React.memo(
  ({ selectedValue, selectItems, filterByLength }) => (
    <select
      value={selectedValue}
      onChange={filterByLength}
      className="goods-list__select"
    >
      {selectItems.map(item => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  ),
);

Select.propTypes = {
  selectedValue: PropTypes.number.isRequired,
  selectItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  filterByLength: PropTypes.func.isRequired,
};
