import React from 'react';
import PropTypes from 'prop-types';

export default class GoodsList extends React.PureComponent {
  render() {
    const { goods, isReversed, sortBy, selectedValue } = this.props;
    let newGoods = [...goods];

    if (sortBy === 'name') {
      newGoods.sort((a, b) => a.localeCompare(b));
    }

    if (sortBy === 'length') {
      newGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      newGoods.reverse();
    }

    newGoods = newGoods.filter(good => good.length >= +selectedValue);

    return (
      <ul>
        {
          newGoods.map(good => (
            <li key={good}>{good}</li>
          ))
        }
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  isReversed: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  selectedValue: PropTypes.number.isRequired,
};
