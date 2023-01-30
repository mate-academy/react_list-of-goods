import { SortType } from '../types/SortType';

export const getReorderedGoods = (
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) => {
  const reorderedGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      reorderedGoods.sort((a, b) => a.localeCompare(b));
      break;

    case SortType.LENGTH:
      reorderedGoods.sort((a, b) => a.length - b.length);
      break;

    default:
    // do nothing
  }

  if (isReversed) {
    reorderedGoods.reverse();
  }

  return reorderedGoods;
};
