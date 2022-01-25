import React from 'react';

type Props = {
  goods: string[],
  isReversed: boolean,
  isSortedAlphabet: boolean,
  defaultGoods: string[],
  isSortedLength: boolean,
};

const goodsList = (goods: string[]) => {
  return (
    goods.map(good => (
      <li key={good}>{good}</li>
    ))
  );
};

export const Goods: React.FC<Props> = ({
  goods,
  isReversed,
  isSortedAlphabet,
  defaultGoods,
  isSortedLength,
}) => {
  if (isReversed) {
    return (
      <ul>
        {goodsList(goods.reverse())}
      </ul>
    );
  }

  if (isSortedAlphabet) {
    return (
      <ul>
        {goodsList(goods.sort())}
      </ul>
    );
  }

  if (isSortedLength) {
    return (
      <ul>
        {goodsList(goods.sort((a, b) => a.length - b.length))}
      </ul>
    );
  }

  return (
    <ul>
      {goodsList(defaultGoods)}
    </ul>
  );
};
