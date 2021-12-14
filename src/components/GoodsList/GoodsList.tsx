import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: string[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div className="goodsList__container">
    <h1 className="goodsList__title">List of goods:</h1>
    <ul className="goodsList__list">
      {
        goods.map(good => (
          <li key={good} className="goodsList__item">
            {good}
          </li>
        ))
      }
    </ul>
  </div>
);
