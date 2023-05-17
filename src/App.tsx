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
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    case SortType.NONE:
      break;
    default:
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.debug(sortType, isReversed);

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

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  reverseSort = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetSort = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render(): React.ReactNode {
    const goods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              this.state.sortType === 1
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              this.state.sortType === 2
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              this.state.isReversed === true
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.reverseSort}
          >
            Reverse
          </button>

          {this.state.isReversed === false && this.state.sortType === 0
            ? null
            : (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.resetSort}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {goods.map(good => {
              return (
                <li data-cy="Good" key={good}>{good}</li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
