import React from 'react';

type Props = {
  goods: string[];
  isReversed: boolean,
  sortedAlphabetically: boolean,
  sortedByLength: boolean,
  goodsLength: number
};

const GoodsList: React.FC<Props> = ({
  goods,
  isReversed,
  sortedAlphabetically,
  sortedByLength,
  goodsLength,
}) => {
  const visibleGoods = goods.filter(good => good.length >= goodsLength);

  if (sortedAlphabetically) {
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
