import React from 'react';
import PropTypes from 'prop-types';

const GoodList = ({ visibleGoods }) => (
  <ul className="goods__goods-list">
    {visibleGoods.map(good => (
      <li key={good}>
        {good}
        <hr />
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  visibleGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default GoodList;
