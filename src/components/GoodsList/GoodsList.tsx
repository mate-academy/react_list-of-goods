import { FC } from 'react';
import { SortType } from '../../types/SortType';

type Props = {
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
};

export const GoodsList: FC<Props> = ({ goods, sortType, isReversed }) => {
  const renderedGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      renderedGoods.sort((a, b) => a.localeCompare(b));
      break;

    case SortType.LENGTH:
      renderedGoods.sort((a, b) => a.length - b.length);
      break;

    default:
      // do nothing
  }

  if (isReversed) {
    renderedGoods.reverse();
  }

  return (
    <ul>
      {renderedGoods.map(good => (
        <li
          key={good}
          data-cy="Good"
        >
          {good}
        </li>
      ))}
    </ul>
  );
};
