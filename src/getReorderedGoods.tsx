import { ReorderOptions } from './Type/ReorderOptions';
import { SortType } from './Type/SortType';

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((goodOne, goodTwo) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return goodOne[sortType].localeCompare(goodTwo[sortType]);

      case SortType.LENGTH:
        return goodOne.length - goodTwo.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // console.log(sortType, isReversed);

  return visibleGoods;
}
