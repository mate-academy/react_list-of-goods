import React from 'react';
import './GoodsList.scss';

type Props = {
  copiedGoods: string[],
};

export const GoodsList: React.FC<Props> = ({ copiedGoods }) => {
  return (
    <ul className="list-group">
      {copiedGoods.map(good => (
        <li key={good} className="list-group-item">
          {good}
        </li>
      ))}
    </ul>
  );
};
