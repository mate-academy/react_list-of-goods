import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: string[],
};

export const GoodsList:React.FC<Props> = ({ goods }) => {
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
