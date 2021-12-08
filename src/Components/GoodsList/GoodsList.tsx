import React from 'react';

type Props = {
  goodsList: string[],
  selected: number,
  isReversed: boolean,
  sortBy: string,
};

export const GoodsList = React.memo(
  ({
    goodsList,
    selected,
    isReversed,
    sortBy,
  }: Props) => {
    const newgoodsList = goodsList.filter((good: string) => (
      good.length >= selected
    ));

    newgoodsList.sort((goodFirst: string, goodSecond: string) => {
      switch (sortBy) {
        case 'Sort alphabetically':

          return goodFirst.localeCompare(goodSecond);

        case 'Sort by length':

          return goodFirst.length - goodSecond.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      newgoodsList.reverse();
    }

    return (
      <ul>
        {newgoodsList.map((good: string) => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  },
);
