import React from 'react';
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
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => (a > b ? 1 : -1));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export const App: React.FC = () => {
  const [state, setState] = React.useState<ReorderOptions>({
    sortType: SortType.NONE,
    isReversed: false,
  });

  const sortAlphabet = () => {
    setState({ sortType: SortType.ALPHABET, isReversed: state.isReversed });
  };

  const sortLength = () => {
    setState({ sortType: SortType.LENGTH, isReversed: state.isReversed });
  };

  const sortReverse = () => {
    setState({
      sortType: state.sortType,
      isReversed: !state.isReversed,
    });
  };

  const handleReset = () => {
    setState({ sortType: SortType.NONE, isReversed: false });
  };

  const sortOrdered = !state.isReversed && state.sortType === SortType.NONE;

  const goods = getReorderedGoods(goodsFromServer, state);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${state.sortType === SortType.ALPHABET ? '' : 'is-light'}`}
          onClick={sortAlphabet}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${state.sortType === SortType.LENGTH ? '' : 'is-light'}`}
          onClick={sortLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${state.isReversed === true ? '' : 'is-light'}`}
          onClick={sortReverse}
        >
          Reverse
        </button>
        {!sortOrdered && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        <ul>
          {goods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
