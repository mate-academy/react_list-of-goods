import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

// enum SortType {
//   NONE,
//   ALPHABET,
//   LENGTH,
// }

type SortType = 'none' | 'alphabet' | 'length' ;

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  if (sortType === 'alphabet') {
    visibleGoods.sort((f1, f2) => f1.localeCompare(f2));
  }

  if (sortType === 'length') {
    visibleGoods.sort((f1, f2) => f1.length - f2.length);
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
  state: State = {
    isReversed: false,
    sortType: 'none',
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlghabatically = () => {
    this.setState(() => ({
      sortType: 'alphabet',
    }));
  };

  sortByLength = () => {
    this.setState(() => ({
      sortType: 'length',
    }));
  };

  reset = () => {
    this.setState(() => ({
      isReversed: false,
      sortType: 'none',
    }));
  };

  render() {
    const { isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info',
              {
                'is-light': sortType !== 'alphabet',
              },
            )}
            onClick={this.sortAlghabatically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success',
              {
                'is-light': sortType !== 'length',
              },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(isReversed || sortType !== 'none') && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map((good) => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
