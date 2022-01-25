import React from 'react';
import './GoodsList.scss';

type Props = {
  goodsList : string[],
};

export const GoodsList: React.FC<Props> = ({ goodsList }) => (
  <ul className="goods-list">
    {goodsList.map(good => (
      <li key={good} className="goods-list__item">
        {good}
      </li>
    ))}
  </ul>
);
