import React from 'react';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list-group">
    {goods.map(good => (
      <li key={good} className="list-group-item list-group-item-action">{good}</li>
    ))}
  </ul>
);
