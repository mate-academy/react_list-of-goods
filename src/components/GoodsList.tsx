import React from 'react';

type Props = {
  goods: string[];
};

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <li key={good} className="goods-list--item">
        {good}
      </li>
    ))}
  </ul>
);
