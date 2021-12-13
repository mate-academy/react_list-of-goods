import React from 'react';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="good__list">
    {goods.map(good => (
      <li key={good} className="good">{good}</li>
    ))}
  </ul>
);
