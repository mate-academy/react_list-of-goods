import React from 'react';
import './GoodsList.scss';

type Props = {
  goodsFromServer: string[]
};

export const GoodsList: React.FC<Props> = ({ goodsFromServer }) => {
  return (
    <ul className="Goodlist">
      {goodsFromServer.map(good => (
        <li key={good}>
          { good }
        </li>
      ))}
    </ul>
  );
};
