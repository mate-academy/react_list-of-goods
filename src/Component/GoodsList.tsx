import React from 'react';

type Props = {
  goods: string[]
};

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map((good) => (
      <li data-cy="Good" key={good}>
        {good}
      </li>
    ))}
  </ul>
);
