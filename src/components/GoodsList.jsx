import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class GoodsList extends React.PureComponent {
  render() {
    const { goods, isReversed, sortBy, showList, value } = this.props;
    let goodsList = [...goods];

    if (value > 1) {
      goodsList = [...goods.filter(good => good.length <= value)];
    }

    goodsList.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabet':
          return g1.localeCompare(g2);

        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsList.reverse();
    }

    return (
      <ul className={classNames({ hidden: showList })}>
        {goodsList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  isReversed: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  showList: PropTypes.bool.isRequired,
};
