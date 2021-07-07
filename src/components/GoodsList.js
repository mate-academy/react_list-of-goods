import React from 'react';
import PropTypes from 'prop-types';
import { GoodShape } from './GoodShape';
import { Good } from './Good';
import { Button } from './Button';
import { Select } from './Select';

export const GoodsList
= (
  { goods, onReverse, onSortAlphabetically, onReset,
    onSortByLength, onFilterLength, selectedLength },
) => (
  <div className="container">
    <div className="buttons">
      <Button
        name="Reverse"
        handler={onReverse}
      />
      <Button
        name="Sort alphabetically"
        handler={onSortAlphabetically}
      />
      <Button
        name="Reset"
        handler={onReset}
      />
      <Button
        name="Sort by length"
        handler={onSortByLength}
      />
      <Select
        onFilterLength={onFilterLength}
        selectedLength={selectedLength}
      />
    </div>

    <ul className="list">
      {goods.map(good => (
        <Good key={good.id} good={good} />
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(GoodShape).isRequired,
  onReverse: PropTypes.func.isRequired,
  onSortAlphabetically: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSortByLength: PropTypes.func.isRequired,
  onFilterLength: PropTypes.func.isRequired,
  selectedLength: PropTypes.number.isRequired,
};

export default GoodsList;
