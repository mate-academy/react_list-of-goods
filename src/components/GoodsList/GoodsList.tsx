import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: string[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div className="GoodsList">
    <h2 className="GoodsList__title">
      Goods list:
    </h2>

    <ul className="GoodsList__item">
      {
        goods.map(good => (
          <li key={good} className="GoodsList__list">
            {good}
          </li>
        ))
      }
    </ul>
  </div>
);
