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
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPABET:
        return g1.localeCompare(g2);
      case SortType.LENGTH:
        return g1.length - g2.length;
      default:
        return 0;
    }
  });

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseHandler = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  alphabeticSorter = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  lengthSorter = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  resetHandler = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    const newGoods = getReorderedGoods(goodsFromServer,
      { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${this.state.sortType !== SortType.ALPABET && 'is-light'}`}
            onClick={this.alphabeticSorter}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${this.state.sortType !== SortType.LENGTH && 'is-light'}`}
            onClick={this.lengthSorter}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!this.state.isReversed && 'is-light'}`}
            onClick={this.reverseHandler}
          >
            Reverse
          </button>

          {(sortType || isReversed)
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.resetHandler}
              >
                Reset
              </button>
            )
            : ''}

        </div>

        <ul>
          <ul>
            {newGoods.map(good => {
              return (
                <div>
                  <div
                    data-cy="Good"
                    key={good}
                    className="box column is-info is-rounded mb-3"
                  >
                    {good}
                  </div>
                </div>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
