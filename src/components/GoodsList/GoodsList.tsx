import React from 'react';
import './GoodsList.scss';

interface Props {
  initialGoods: string[],
}

export const GoodsList: React.FC<Props> = ({ initialGoods }) => (
  <div className="GoodsList GoodsList__wrapper">
    <h2 className="GoodsList__heading">Goods list:</h2>
    <ul className="GoodsList__list">
      {
        initialGoods.map(good => (
          <li key={good} className="GoodsList__element">
            {good}
          </li>
        ))
      }
    </ul>
  </div>
);
