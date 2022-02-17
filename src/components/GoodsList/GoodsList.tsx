import React from 'react';
import './GoodsList.css';

type Props = {
  goods: string[];
  isReversed: boolean,
  sortedAlphabet: boolean,
  sortedByLength: boolean,
  goodsLength: number
};

const GoodsList: React.FC<Props> = ({
  goods,
  isReversed,
  sortedAlphabet,
  sortedByLength,
  goodsLength,
}) => {
  const visibleGoods = goods.filter(good => good.length >= goodsLength);

  if (sortedAlphabet) {
    visibleGoods.sort();
  }

  if (sortedByLength) {
    visibleGoods.sort((g1, g2) => g1.length - g2.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return (
    <ul>
      {visibleGoods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
