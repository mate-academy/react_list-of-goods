import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  const sortByAlphabetically = () => {
    setState({ sortType: SortType.ALPHABET, isReversed: state.isReversed });
  };

  const sortByLength = () => {
    setState({ sortType: SortType.LENGTH, isReversed: state.isReversed });
  };

  const reverseOrder = () => {
    setState({
      sortType: state.sortType,
      isReversed: !state.isReversed,
    });
  };

  const resetSorting = () => {
    setState({ sortType: SortType.NONE, isReversed: false });
  };

  const goods = getReorderedGoods(goodsFromServer, state);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={classNames('button', 'is-info', {
            'is-light': state.sortType !== SortType.ALPHABET,
          })}
          onClick={sortByAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className={classNames('button', 'is-info', {
            'is-light': state.sortType !== SortType.LENGTH,
          })}
          onClick={sortByLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          className={classNames('button', 'is-warning', {
            'is-light': !state.isReversed,
          })}
          onClick={reverseOrder}
        >
          Reverse
        </button>
        {(state.sortType !== SortType.NONE || state.isReversed) && (
          <button
            type="button"
            className={classNames('button', 'is-danger', 'is-light')}
            onClick={resetSorting}
          >
            Reset
          </button>
        )}
      </div>
      <ul>
        {goods.map(item => (
          <li key={item} data-cy="Good">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
