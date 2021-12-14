import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <>
    <ul className="goods__list">
      {goods.map(good => (
        <li className="goods__item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  </>
);
