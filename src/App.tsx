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

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${this.state.sortType !== SortType.ALPHABET && 'is-light'}`}
            onClick={() => this.setState((prev: State) => {
              return {
                ...prev,
                sortType: SortType.ALPHABET,
              };
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${this.state.sortType !== SortType.LENGTH && 'is-light'}`}
            onClick={() => this.setState((prev: State) => {
              return {
                ...prev,
                sortType: SortType.LENGTH,
              };
            })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!this.state.isReversed && 'is-light'}`}
            onClick={() => this.setState((prev: State) => {
              return {
                ...prev,
                isReversed: !prev.isReversed,
              };
            })}
          >
            Reverse
          </button>

          {this.state.sortType || this.state.isReversed ? (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.setState((prev: State) => {
                return {
                  ...prev,
                  sortType: SortType.NONE,
                  isReversed: false,
                };
              })}
            >
              Reset
            </button>
          ) : ''}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state)
            .map((el: string) => {
              return <li key={el} data-cy="Good">{el}</li>;
            })}

        </ul>
      </div>
    );
  }
}
