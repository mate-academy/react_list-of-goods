import React from 'react';

type Props = {
  goods: string[];
};

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul className="good-list">
    {goods.map(good => (
      <li key={good} className="good">{good}</li>
    ))}
  </ul>
);
