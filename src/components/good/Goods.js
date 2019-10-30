import React from 'react';
import PropTypes from 'prop-types';

const Goods = ({ goods }) => (

  <ul className="goods-list">
    {goods.map(item => (
      <li key={item} className="goods-item">
        {item}
      </li>
    ))}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Goods;
