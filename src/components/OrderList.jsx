import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

export const OrderList = ({
  reverse,
  sortByLength,
  sortByName,
  isReverse,
  reset,
  allGoods,
  sortBy,
  value,
  filterByLength,
}) => {
  const copyGoods = [...allGoods].filter(good => good.length >= value);

  copyGoods.sort((prev,next) => {
    switch(sortBy) {

      case 'name': 
      return prev.localeCompare(next);

      case 'length':
      return prev.length - next.length;

      default:
      return null;
    }
  })

  if (isReverse) {
    copyGoods.reverse();
  }

  return (
    <>
      <ul>
        {copyGoods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
      <Button
        action={reverse}
        text='reverse'
      />
      <Button
        action={sortByName}
        text='sort by Name'
      />
      <Button
        action={reset}
        text='reset'
      />
      <Button
        action={sortByLength}
        text='sort by Length'
      />
      <select 
        value={value}
        onChange={filterByLength}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </>
  );
}


OrderList.propTypes = {
  sortBy: PropTypes.string.isRequired,
  isReverse: PropTypes.bool.isRequired,
  reverse: PropTypes.func.isRequired,
  sortByName: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  allGoods:
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.number.isRequired,
  filterByLength: PropTypes.func.isRequired,
}
