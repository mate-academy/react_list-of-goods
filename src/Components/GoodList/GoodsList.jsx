import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  preparationToRendering = () => {
    const visibleGoods = this.props.goods.filter(goods => (
      goods.length > this.props.minGoodsLength
    ));

    visibleGoods.sort((firsGoods, nextGoods) => {
      switch (this.props.sortBy) {
        case 'length':
          return firsGoods.length - nextGoods.length;
        case 'ABC':
          return firsGoods.localeCompare(nextGoods);
        default: return 0;
      }
    });

    if (this.props.isReverse) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  }

  render() {
    return (
      <>
        <ul>
          {this.preparationToRendering().map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isReverse: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  minGoodsLength: PropTypes.number.isRequired,
};

export default GoodsList;
