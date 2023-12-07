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
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.NONE:
      break;
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
state = {
  isReversed: false,
  sortType: SortType.NONE,
}

sortAlphabetically = () => {
  this.setState({ sortType: SortType.ALPHABET });
}

SortByLength = () => {
  this.setState({ sortType: SortType.LENGTH });
}

reverse = () => {
  this.setState((state) => ({
    isReversed: !state.isReversed,
  }));
};

reset = () => {
  this.setState({ isReversed: false, sortType: SortType.NONE });
}

render() {
  const { isReversed, sortType } = this.state;
  const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });
  const initialState = (sortType !== SortType.NONE || isReversed);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${(sortType !== SortType.ALPHABET) && ('is-light')}`}
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${(sortType !== SortType.LENGTH) && ('is-light')}`}
          onClick={this.SortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${(!isReversed) && ('is-light')}`}
          onClick={this.reverse}
        >
          Reverse
        </button>

        {initialState && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={this.reset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        <ul>
          {goods.map(good => <li data-cy="Good" key={good}>{good}</li>)}
        </ul>
      </ul>
    </div>
  );
}
}
