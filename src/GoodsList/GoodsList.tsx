import React from 'react';
import './GoodsList.css';

type Props = {
  goodsFromServer: string[],
  isReversed: boolean,
  sortBy: string,
};

export const GoodsList: React.FC<Props> = ({
  goodsFromServer,
  isReversed,
  sortBy,
}) => {
  const copiedGoods = [...goodsFromServer];

  copiedGoods.sort((g1: string, g2: string) => {
    switch (sortBy) {
      case 'length':
        return g1.length - g2.length;

      case 'alphabet':
        return g1.localeCompare(g2);

      default:
        return 0;
    }
  });

  if (isReversed) {
    copiedGoods.reverse();
  }

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
