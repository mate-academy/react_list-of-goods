import React from 'react';

type Props = {
  goodsList : string [],
};

export const GoodsList: React.FC<Props> = ({ goodsList }) => (
  <ul>
    {goodsList.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);
