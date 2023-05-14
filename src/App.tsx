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

  visibleGoods.sort((f1, f2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return f1.length - f2.length;

      case SortType.ALPHABET:
        return f1.localeCompare(f2);

      case SortType.NONE:
      default:
        return 0;
    }
  });

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
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseBy = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const goods = getReorderedGoods(goodsFromServer, this.state);
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortByAlphabet}
            type="button"
            className={sortType === SortType.ALPHABET
              ? 'button is-info'
              : 'button is-info is-light'}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortByLength}
            type="button"
            className={sortType === SortType.LENGTH
              ? 'button is-success'
              : 'button is-success is-light'}
          >
            Sort by length
          </button>

          <button
            onClick={this.reverseBy}
            type="button"
            className={isReversed
              ? 'button is-warning'
              : 'button is-warning is-light'}
          >
            Reverse
          </button>
          {(sortType === SortType.ALPHABET
          || sortType === SortType.LENGTH
          || isReversed) && (
            <button
              onClick={this.sortByReset}
              type="button"
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {goods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
