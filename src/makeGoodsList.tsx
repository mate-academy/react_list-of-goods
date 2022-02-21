import React from 'react';

type Props = {
  goodsList: string[],
};

export const MakeGoodsList: React.FC<Props> = ({ goodsList }) => {
  return (
    <ul>
      {goodsList.map((good) => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
