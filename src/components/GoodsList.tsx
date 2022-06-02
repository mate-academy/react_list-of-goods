import React from 'react';
import { SortType } from '../types/SortType';

type Props = {
  goodsFromServer: string[],
  isReverse: boolean,
  SortBy: SortType,
  lengthMin: number
};

const GoodsList: React.FC<Props> = ({
  goodsFromServer, isReverse, SortBy, lengthMin,
}) => {
  const copyOFGoods = goodsFromServer.filter(good => good.length >= lengthMin);

  switch (SortBy) {
    case SortType.Alfabet:
      copyOFGoods.sort((g1, g2) => g1.localeCompare(g2));
      break;
    case SortType.Length:
      copyOFGoods.sort((g1, g2) => g1.length - g2.length);
      break;
    default:
      break;
  }

  if (isReverse) {
    copyOFGoods.reverse();
  }

  return (
    <ul>
      {copyOFGoods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(GoodsList);
