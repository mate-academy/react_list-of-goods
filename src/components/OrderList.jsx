import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export const OrderList = ({
  reverse,
  sortByName,
  sortByLength,
  reset,
  allGoods,
}) => (
  <>
    <ul>
      {allGoods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
    <Button
      action={reverse}
      text="reverse"
    />
    <Button
      action={sortByName}
      text="sort by Name"
    />
    <Button
      action={reset}
      text="reset"
    />
    <Button
      action={sortByLength}
      text="sort by Length"
    />
  </>

);

OrderList.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortByName: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  allGoods:
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
