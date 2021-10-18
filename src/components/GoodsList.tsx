import React from 'react';

type Props = {
  goods: string[],
  isReversed: boolean,
  sortBy: string | null,
};

const GoodsList:React.FC<Props> = ({
  goods,
  isReversed,
  sortBy,
}) => {
  const goodsCopy = [...goods];

  if (sortBy !== null) {
    goodsCopy.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    goodsCopy.reverse();
  }

  return (
    <ul className="Goods">
      {goodsCopy.map(good => (
        <li
          className="Goods__item"
        >
          {good}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
