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
  sortType: SortType;
  isReversed: boolean;
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  let visibleGoods = [...goods];

  // Sort and reverse goods if needed
  if (sortType === SortType.NONE) {
    visibleGoods = visibleGoods;
  } else if (sortType === SortType.ALPHABET) {
    visibleGoods = visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods = visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods = visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

type State = {
  isReversed: boolean;
  sortType: SortType;
};

const defaultState = {
  isReversed: false,
  sortType: SortType.NONE,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseOrder = () => {
    // console.log('click');

    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  sortAlphabetically = () => {
    this.setState(() => {
      return {
        sortType: SortType.ALPHABET,
      };
    });
  };

  sortByLength = () => {
    this.setState(() => {
      return {
        sortType: SortType.LENGTH,
      };
    });
  };

  sortReset = () => {
    this.setState(() => {
      return {
        isReversed: false,
        sortType: SortType.NONE,
      };
    });
  };

  isStateDifferent = () => {
    return (
      this.state.isReversed !== defaultState.isReversed ||
      this.state.sortType !== defaultState.sortType
    );
  };

  render() {
    const { isReversed, sortType } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, {
      isReversed,
      sortType,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortAlphabetically}
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className={`button is-success ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverseOrder}
            className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          >
            Reverse
          </button>

          {this.isStateDifferent() && (
            <button
              type="button"
              onClick={this.sortReset}
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {reorderedGoods.map((good, index) => (
            <li key={index} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
