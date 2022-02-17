import React from 'react';

type Props = {
  reverse: boolean;
  sortAlphabetically: boolean;
  sortByLength: boolean;
  goods: string[];
  minLength: number;
};

export const GoodsList: React.FC<Props> = ({
  reverse,
  sortAlphabetically,
  sortByLength,
  goods,
  minLength,
}) => {
  const visibleGoods = goods.filter(
    good => good.length >= minLength,
  );

  if (sortAlphabetically) {
    visibleGoods.sort();
  }

  if (sortByLength) {
    visibleGoods.sort((a, b) => {
      const firstLength = a.length;
      const secondLength = b.length;

      return firstLength - secondLength;
    });
  }

  if (reverse) {
    visibleGoods.reverse();
  }

  return (
    <ul>
      {visibleGoods.map((good) => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
