import React from 'react';
import './GoodsList.css';

export const GoodsList: React.FC<{ goods: string[] }> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li
        key={good}
        className="list__item"
      >
        {good}
      </li>
    ))}
  </ul>
);
