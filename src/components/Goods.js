import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Goods = ({ goods }) => (
  <div>
    <ul className="goods">
      {goods.map(item => (
        <li key={item} className="goods_list">
          <Item itemData={item} />
        </li>
      ))}
    </ul>
  </div>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object])).isRequired,
};

export default Goods;
