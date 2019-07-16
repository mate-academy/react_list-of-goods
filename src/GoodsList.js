import React from 'react';

const GoodsList = ({ allGoods }) => (
  <ul>
    {allGoods.map(goodsItem => (
      <li>
        {goodsItem}
      </li>
    ))}
  </ul>
);

export default GoodsList;
