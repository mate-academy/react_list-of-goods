import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ visibleGoods }) => (
  <ul className="goods-list">
    {visibleGoods.map(item => (
      <li className="list-item" key={item}>
        {item}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  visibleGoods:
  PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
