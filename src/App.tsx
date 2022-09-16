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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
): string[] {
  const visibleGoods = [...goods];

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((good1, good2) => {
      switch (sortType) {
        case SortType.LENGTH:
          return good1.length - good2.length;
        case SortType.ALPABET:
          return good1.localeCompare(good2);
        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  sortType: SortType,
  isReversed: boolean,
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortTypeUpdate = (sortType: number) => {
    this.setState({ sortType });
  };

  handleReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
            onClick={() => this.handleSortTypeUpdate(SortType.ALPABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => this.handleSortTypeUpdate(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': isReversed !== true },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {(sortType || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map(good => (
            <li data-cy="Good" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
