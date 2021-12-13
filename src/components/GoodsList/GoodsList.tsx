import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: string[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList__item">
    {
      goods.map(good => (
        <li key={good} className="GoodsList__list">
          {good}
        </li>
      ))
    }
  </ul>
);
