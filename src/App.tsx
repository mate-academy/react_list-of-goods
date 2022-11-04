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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods = visibleGoods.sort((a, b) => a.localeCompare(b));
      break;

    case SortType.LENGTH:
      visibleGoods = visibleGoods.sort((a, b) => a.length - b.length);
      break;

    default:
  }

  if (isReversed) {
    return visibleGoods.reverse();
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
            className={`button is-info ${sortType !== SortType.ALPABET && 'is-light'}`}
            onClick={this.alphabeticSorter}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType !== SortType.LENGTH && 'is-light'}`}
            onClick={this.lengthSorter}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!isReversed && 'is-light'}`}
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
