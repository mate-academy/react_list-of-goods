import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Select from './Select';

const GoodsList = ({
  goodsList,
  start,
  reverse,
  sortAlphabetically,
  sortByLength,
  select,
  selectedLength,
}) => (
  <section className="goods">
    <ul className="goods__list">
      {goodsList.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
    <Select
      selectedLength={selectedLength}
      action={select}
    />
    <Button
      text="Reverse"
      action={reverse}
    />
    <Button
      text="Sort alphabetically"
      action={sortAlphabetically}
    />
    <Button
      text="Sort by length"
      action={sortByLength}
    />
    <Button
      text="Reset"
      action={start}
    />
  </section>
);

GoodsList.defaultProps = {
  goodsList: [],
};

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  start: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
  selectedLength: PropTypes.string.isRequired,
};

export default GoodsList;
