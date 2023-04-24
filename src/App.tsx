import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort();
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export const App: React.FC = () => {
  const [reorderOptions, setReorderOptions] = useState<ReorderOptions>({
    sortType: SortType.NONE,
    isReversed: false,
  });

  const sortByAlphabet = () => {
    setReorderOptions({
      sortType: SortType.ALPHABET,
      isReversed: false,
    });
  };

  const sortByLength = () => {
    setReorderOptions({
      sortType: SortType.LENGTH,
      isReversed: false,
    });
  };

  const reverse = () => {
    setReorderOptions({
      ...reorderOptions,
      isReversed: !reorderOptions.isReversed,
    });
  };

  const reset = () => {
    setReorderOptions({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  const visibleGoods = getReorderedGoods(goodsFromServer, reorderOptions);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${reorderOptions.sortType === SortType.ALPHABET ? '' : 'is-light'}`}
          onClick={sortByAlphabet}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${reorderOptions.sortType === SortType.LENGTH ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${reorderOptions.isReversed ? '' : 'is-light'}`}
          onClick={reverse}
        >
          Reverse
        </button>

        {(reorderOptions.sortType !== SortType.NONE
        || reorderOptions.isReversed) && (
          <button
            type="button"
            className="button is-danger"
            onClick={reset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map((good) => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
