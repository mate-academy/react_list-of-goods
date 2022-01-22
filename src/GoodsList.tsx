import React from 'react';

export const GoodsList: React.FC<{ goods: string[] }> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
