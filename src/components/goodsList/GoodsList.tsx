import React from 'react';
import 'bulma/css/bulma.css';
import { SortType } from '../types/sortType';

type Props = {
  goods: string[];
  sortType: SortType;
  isReversed: boolean;
};

export const GoodsList: React.FC<Props> = (props: Props) => {
  const { goods, sortType, isReversed } = props;

  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);
      case SortType.LENGTH:
        return good1.length - good2.length;
      case SortType.NONE:
        return 0;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return (
    <ul>
      {visibleGoods.map(good => {
        return (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        );
      })}
    </ul>
  );
};
