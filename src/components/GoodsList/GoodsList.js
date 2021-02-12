import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

export const GoodsList = React.memo(
  ({ goods, minGoodsLength }) => (
    <ul className="goodsList">
      {[...goods].filter(product => product.length >= minGoodsLength)
        .map(product => (
          <li
            key={product}
            className="goodsItem"
          >
            {product}
          </li>
        ))}
    </ul>
  ),
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf.isRequired,
  minGoodsLength: PropTypes.number.isRequired,
};
