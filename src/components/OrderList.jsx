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
}) => {
  const copyGoods = [...allGoods];

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
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}
