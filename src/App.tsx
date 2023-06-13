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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case 0:
      break;

    case 1:
      visibleGoods.sort((goodA, goodB) => {
        return goodA.localeCompare(goodB);
      });
      break;

    case 2:
      visibleGoods.sort((goodA, goodB) => {
        return goodA.length - goodB.length;
      });
      break;

    default:
      throw Error('Unknown sortType');
  }

  if (isReversed) {
    visibleGoods.reverse();
  }
  // To avoid the original array mutation

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    sortType: 0,
    isReversed: false,
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortType: 1 });
  };

  sortByLength = () => {
    this.setState({ sortType: 2 });
  };

  reset = () => {
    this.setState({
      sortType: 0,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortAlphabetically}
            type="button"
            className={`button is-info ${sortType === 1 ? '' : 'is-light'}`}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortByLength}
            type="button"
            className={`button is-success ${sortType === 2 ? '' : 'is-light'}`}
          >
            Sort by length
          </button>

          <button
            onClick={this.reverse}
            type="button"
            className={`button is-warning ${isReversed ? '' : ' is-light'}`}
          >
            Reverse
          </button>
          {sortType === 0 && isReversed === false
            ? ''
            : (
              <button
                onClick={this.reset}
                type="button"
                className="button is-danger is-light"
              >
                Reset
              </button>
            )}

        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li
                key={good}
                data-cy="Good"
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
