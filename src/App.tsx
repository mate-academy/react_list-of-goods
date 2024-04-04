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

type State = {
  isReversed: boolean;
  sortType: SortType;
};

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: State,
) {
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a: string, b: string) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a: string, b: string) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  resetGoodsSorting = () => {
    this.setState((state: State) => {
      return {
        ...state,
        isReversed: false,
        sortType: SortType.NONE,
      };
    });
  };

  sortGoodsAlphabet = () => {
    this.setState((state: State) => {
      return {
        ...state,
        sortType: SortType.ALPHABET,
      };
    });
  };

  sortGoodsByLength = () => {
    this.setState((state: State) => {
      return {
        ...state,
        sortType: SortType.LENGTH,
      };
    });
  };

  handleReverseGoods = () => {
    this.setState((state: State) => {
      return {
        ...state,

        isReversed: !state.isReversed,
      };
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, {
      sortType: sortType,
      isReversed: isReversed,
    });

    function goodsSortedOrReversed(
      currentSortType: State['sortType'],
      isCurrentlyReversed: State['isReversed'],
    ) {
      return currentSortType !== SortType.NONE || isCurrentlyReversed;
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info${SortType.ALPHABET !== sortType ? ' is-light' : ''}`}
            onClick={this.sortGoodsAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success${SortType.LENGTH !== sortType ? ' is-light' : ''}`}
            onClick={this.sortGoodsByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning${isReversed === false ? ' is-light' : ''}`}
            onClick={this.handleReverseGoods}
          >
            Reverse
          </button>

          {goodsSortedOrReversed(sortType, isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetGoodsSorting}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {reorderedGoods.map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
