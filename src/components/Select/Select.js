import React from 'react';

import './Select.css';

const Select = (props) => {
  const { listOfGoods, selectedByDefault, onChange } = props;

  const listToSelect = [...listOfGoods]
    .map(item => item.length)
    .sort((a, b) => a - b)
    .filter((item, index, arr) => index === arr.indexOf(item));

  return (
    <div className="select-container">
      <h2>Select:</h2>
      <select
        className="goods-select form-control"
        value={selectedByDefault}
        onChange={event => onChange(event)}
      >
        <option value={0} />
        {listToSelect.map(item => (
          <option
            value={item}
            key={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
