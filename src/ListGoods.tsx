import React from 'react';

interface Props {
  goods: string[],
}

export const ListGoods:React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good}>{good}</li>
    ))}
  </ul>
);
