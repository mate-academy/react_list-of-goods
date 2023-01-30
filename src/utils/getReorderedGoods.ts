import { SortType } from '../types/SortType';

export const getReorderedGoods = (
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
): string[] => {
  const reorderedGoods = [...goods];

  if (sortType) {
    switch (sortType) {
      case SortType.ALPHABET:
        reorderedGoods.sort((a, b) => a.localeCompare(b));
        break;

      case SortType.LENGTH:
        reorderedGoods.sort((a, b) => a.length - b.length);
        break;

      default:
        throw new Error('Invalid sort type');
    }
  }

  if (isReversed) {
    reorderedGoods.reverse();
  }

  return reorderedGoods;
};
