import React from 'react';
import PropTypes from 'prop-types';

export const GoodsSelect = ({
  initial,
  selectValue,
  changeSelect,
}) => (
  <div className="select is-success">
    <select
      value={selectValue}
      onChange={changeSelect}
    >
      {initial.map((item, index) => (
        <option key={item}>{index + 1}</option>
      ))}
    </select>
  </div>
);

GoodsSelect.propTypes = {
  initial: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  selectValue: PropTypes.string.isRequired,
  changeSelect: PropTypes.func.isRequired,
};
