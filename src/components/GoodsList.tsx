import React from 'react';
import { Props } from '../types/GoodsListProps';

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <li key={good} className="goods-list-item">
        {good}
      </li>
    ))}
  </ul>
);

export default GoodsList;
