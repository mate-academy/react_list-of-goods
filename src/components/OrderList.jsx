import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { Select } from './Select';

export class OrderList extends React.Component {
  goodsFilter = (copyGoods, sortBy) => copyGoods.sort((prev, next) => {
    switch (sortBy) {
      case 'name':
        return prev.localeCompare(next);

      case 'length':
        return prev.length - next.length;

      default:
        return 0;
    }
  })

  render() {
    const {
      reverse,
      sortByLength,
      sortByName,
      isReverse,
      reset,
      allGoods,
      sortBy,
      value,
      filterByLength,
      maxNameLength,
    } = this.props;

    const copyGoods = [...allGoods].filter(good => good.length >= value);

    this.goodsFilter(copyGoods, sortBy);

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
          onClick={reverse}
          text="reverse"
        />
        <Button
          onClick={sortByName}
          text="sort by Name"
        />
        <Button
          onClick={reset}
          text="reset"
        />
        <Button
          onClick={sortByLength}
          text="sort by Length"
        />
        <Select
          onChange={filterByLength}
          value={value}
          maxNameLength={maxNameLength}
        />
      </>
    );
  }
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
  maxNameLength: PropTypes.number.isRequired,
};
