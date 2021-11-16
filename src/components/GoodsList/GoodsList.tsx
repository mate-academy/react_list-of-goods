import React from 'react';

type Props = {
  allGoods: string[],
};

export const GoodsList: React.FC<Props> = ({ allGoods }) => (
  <ul>
    {allGoods.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
