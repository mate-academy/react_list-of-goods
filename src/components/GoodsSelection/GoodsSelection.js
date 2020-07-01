import React from 'react';
import './GoodsSelection.css';
import PropTypes from 'prop-types';
import GoodsSelectionItems from '../GoodsSelectionItems/GoodsSelectionItems';

const optionArray = [];

for (let i = 1; i < 11; i += 1) {
  optionArray.push(i);
}

const GoodsSelection = (props) => {
  const { handleSelectLength, defaultValue, onSelectChange } = props;

  return (
    <select
      className="goods__selection"
      value={defaultValue}
      onChange={e => onSelectChange(e.target.value)}
      onClick={e => handleSelectLength(e.target.value)}
    >
      {optionArray.map(digit => (
        <GoodsSelectionItems
          handleSelectLength={handleSelectLength}
          digit={digit}
          key={digit}
        />
      ))}
    </select>
  );
};

GoodsSelection.propTypes = {
  handleSelectLength: PropTypes.func.isRequired,
  defaultValue: PropTypes.number.isRequired,
  onSelectChange: PropTypes.func.isRequired,
};

export default GoodsSelection;
