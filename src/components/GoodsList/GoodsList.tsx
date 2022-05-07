import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <li className="goods-list__item" key={good}>{good}</li>
    ))}
  </ul>
);

export default React.memo(GoodsList);
