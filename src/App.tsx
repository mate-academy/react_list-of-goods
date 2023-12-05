import React from 'react';
import cn from 'classnames';
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
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goodsFromServer];

  visibleGoods.sort((a, b) => {
    if (sortType === SortType.ALPHABET) {
      return a.localeCompare(b);
    }

    if (sortType === SortType.LENGTH) {
      return a.length - b.length;
    }

    return 0;
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
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleSort = (sortType: SortType) => {
    this.setState({ sortType });
  };

  handleReverse = () => {
    this.setState((prevState) => ({ isReversed: !prevState.isReversed }));
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const reorderedGoods = getReorderedGoods({ sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn({
              'button is-info': true,
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={() => this.handleSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn({
              'button is-success': true,
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={() => this.handleSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn({
              'button is-warning': true,
              'is-light': isReversed !== true,
            })}
            onClick={() => this.handleReverse()}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => this.handleReset()}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          {reorderedGoods.map(item => {
            return (
              <li data-cy="Good">{item}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
