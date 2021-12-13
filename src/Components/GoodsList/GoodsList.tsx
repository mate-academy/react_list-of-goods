import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: string[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div className="GoodsList">
    <ul className="GoodsList__items">
      {
        goods.map(product => (
          <li key={product} className="GoodsList__item">
            {product}
          </li>
        ))
      }
    </ul>
  </div>
);
