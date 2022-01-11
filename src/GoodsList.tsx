import React from 'react';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li key={item}>
        {item}
      </li>
    ))}
  </ul>
);
