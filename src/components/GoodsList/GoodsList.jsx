import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';
import './GoodsList.scss';

export class GoodsList extends React.PureComponent {
  render() {
    const { goods, sortBy, minLength, isReversed } = this.props;
    const newGoodsList = goods.filter(good => good.length >= minLength);

    newGoodsList.sort((goodA, goodB) => {
      switch (sortBy) {
        case 'name':
          return goodA.localeCompare(goodB);
        case 'length':
          return goodA.length - goodB.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      newGoodsList.reverse();
    }

    return (
      <ul>
        {newGoodsList.map(good => (
          <li
            key={good}
            className="fs-5 good"
          >
            <Good name={good} />
          </li>
        ))}
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  sortBy: PropTypes.string.isRequired,
  minLength: PropTypes.number.isRequired,
  isReversed: PropTypes.bool.isRequired,
};
