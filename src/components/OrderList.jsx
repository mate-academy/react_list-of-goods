import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';


export class OrderList extends React.Component {
  sortedGoods = (copyGoods, sortBy) => copyGoods.sort((prev, next) => {
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
      isReverse,
      goods,
      sortBy,
      value,
    } = this.props;

    const copyGoods = [...goods].filter(good => good.length >= value);

    this.sortedGoods(copyGoods, sortBy);

    if (isReverse) {
      copyGoods.reverse();
    }

    return (
      <>
        <ul>
          {copyGoods.map(good => (
            <ListItem
              key={good}
              text={good}
            />
          ))}
        </ul>
      </>
    );
  }
}

OrderList.propTypes = {
  sortBy: PropTypes.string.isRequired,
  isReverse: PropTypes.bool.isRequired,
  goods:
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.number.isRequired,
};
