import React from 'react';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="App__goods-list goods-list">
    {goods.map(good => (
      <li key={good} className="goods-list__item">
        {good}
      </li>
    ))}
  </ul>
);
