import React from 'react';
import './GoodsList.css';

type Props = {
  goods: string[],
  hide: boolean,
};

export const GoodsList: React.FC<Props> = ({ goods, hide }) => {
  return (
    <ul
      className="GoodsList"
      hidden={hide}
    >
      {goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
