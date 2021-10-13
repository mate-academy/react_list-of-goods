import React from 'react';

import '../../App.scss';

type GoodsType = {
  goods: string[],
};

export const GoodList: React.FC<GoodsType> = ({ goods }) => {
  return (
    <ul className="App__list">
      {goods.map(good => (
        <li key={good} className="App__item">
          {good}
        </li>
      ))}
    </ul>
  );
};
