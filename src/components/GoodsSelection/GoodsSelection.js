import React from 'react';
import './GoodsSelection.css';
import PropTypes from 'prop-types';
import GoodsSelectionItems from '../GoodsSelectionItems/GoodsSelectionItems';

const optionArray = [];

for (let i = 1; i < 11; i += 1) {
  optionArray.push(i);
}

const GoodsSelection = (props) => {
  const { defaultValue, onSelectChange } = props;

  return (
    <select
      className="goods__selection"
      value={defaultValue}
      onChange={e => onSelectChange(e.target.value)}
    >
      {optionArray.map(digit => (
        <GoodsSelectionItems
          digit={digit}
          key={digit}
        />
      ))}
    </select>
  );
};

GoodsSelection.propTypes = {
  defaultValue: PropTypes.number.isRequired,
  onSelectChange: PropTypes.func.isRequired,
};

export default GoodsSelection;
