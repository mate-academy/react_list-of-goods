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
  ALPABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  } else if (sortType === SortType.ALPABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: 0,
  };

  render(): React.ReactNode {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': this.state.sortType !== SortType.ALPABET,
            })}
            onClick={() => {
              this.setState({ sortType: SortType.ALPABET });
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': this.state.sortType !== SortType.LENGTH,
            })}
            onClick={() => {
              this.setState({ sortType: SortType.LENGTH });
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': !this.state.isReversed,
            })}
            onClick={() => {
              this.setState((state) => ({
                isReversed: !state.isReversed,
              }));
            }}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({ sortType: SortType.NONE, isReversed: false });
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, {
              sortType: this.state.sortType,
              isReversed: this.state.isReversed,
            }).map((good: string) => {
              return (
                <li key={good} data-cy="Good">{good}</li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
