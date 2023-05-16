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

  visibleGoods.sort((firstGood, secondGood) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return firstGood.localeCompare(secondGood);

      case SortType.LENGTH:
        return firstGood.length - secondGood.length;

      default:
        return SortType.NONE;
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

  handleReverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  handleSortAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReset = () => {
    this.setState({ isReversed: false });
    this.setState({ sortType: SortType.NONE });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const isCurrent = this.state.isReversed
      || this.state.sortType !== SortType.NONE;

    const visibleGoods = getReorderedGoods(
      goodsFromServer, { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType !== SortType.ALPHABET && 'is-light'}`}
            onClick={this.handleSortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType !== SortType.LENGTH && 'is-light'}`}
            onClick={this.handleSortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!isReversed && 'is-light'}`}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {
            isCurrent
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.handleReset}
                >
                  Reset
                </button>
              )
          }
        </div>
        <ul>
          {visibleGoods.map(
            good => <li data-cy="Good" key={good}>{good}</li>,
          )}
        </ul>
      </div>
    );
  }
}
