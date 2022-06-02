import React from 'react';

type Props = {
  goods: string[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="content">
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);
