import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ allGoods }) => (
  <ul>
    {allGoods.map(goodsItem => (
      <li>
        {goodsItem}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  allGoods: PropTypes.shape({
    goodsItem: PropTypes.string,
    map: PropTypes.func,
  }).isRequired,
};

export default GoodsList;
