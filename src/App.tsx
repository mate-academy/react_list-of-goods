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

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

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
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const {
      handleSortAlphabetically,
      handleSortByLength,
      handleReverse,
      handleReset,
    } = this;

    const reorderedGoods = getReorderedGoods(
      goodsFromServer,
      {
        sortType: this.state.sortType,
        isReversed: this.state.isReversed,
      },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === SortType.ALPHABET
              ? 'button is-info'
              : 'button is-info is-light'}
            onClick={handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === SortType.LENGTH
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={handleReverse}
          >
            Reverse
          </button>

          {(this.state.isReversed === true
          || this.state.sortType !== SortType.NONE)
            && (
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
          {reorderedGoods.map(good => (
            <li key={good} data-cy="Good">{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
