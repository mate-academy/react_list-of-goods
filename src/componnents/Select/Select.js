import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ selectedValue, selectItems, filterByLength }) => (
  <select
    value={selectedValue}
    onChange={filterByLength}
    className="form-control"
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
);

Select.propTypes = {
  selectedValue: PropTypes.number.isRequired,
  selectItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  filterByLength: PropTypes.func.isRequired,
};

export default React.memo(Select);
