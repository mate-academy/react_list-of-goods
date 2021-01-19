import React from 'react';

export const GoodsList = ({ goods }) => (
  <ul
    className="goods"
  >
    {goods.map(good => (
      <li
        key={good}
        className="goods__item"
      >
        {good}
      </li>
    ))}
  </ul>
);
