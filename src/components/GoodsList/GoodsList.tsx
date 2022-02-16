import React from 'react';

type Props = {
  goods: string[],
  reversed: boolean,
  sorted: boolean,
  sortBy: string,
  lengthLimit: number,
};

export const GoodsList: React.FC<Props> = ({
  goods,
  reversed,
  sorted,
  sortBy,
  lengthLimit,
}) => {
  const visibleGoods = [...goods].filter(g => g.length >= lengthLimit);

  if (sorted) {
    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'length':
          return a.length - b.length;

        case 'alpha':
          return a.localeCompare(b);

        default:
          return 0;
      }
    });
  }

  if (reversed) {
    visibleGoods.reverse();
  }

  return (
    <ul className="goods">
      {visibleGoods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
