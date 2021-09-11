import React from 'react';

type Goods = {
  goods: string[];
};

export const GoodsList: React.FC<Goods> = ({ goods }) => {
  return (
    <ul className="goods__list">
      {goods.map(good => (
        <li key={good} className="goods__item">
          {good}
        </li>
      ))}
    </ul>
  );
};
