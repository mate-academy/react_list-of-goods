import React from 'react';

const Select = ({ initialSelect, onClickSelectChanges, originalGoods }) => (
  <div className="container select">
    <select className="select-visible-list"
      onChange={onClickSelectChanges}
      value={initialSelect}
    >
      {originalGoods.map((e, i) => (
        <option key={i + 1} value={i + 1}>{i + 1}</option>
      ))}

    </select>
  </div>
);

export default Select;
