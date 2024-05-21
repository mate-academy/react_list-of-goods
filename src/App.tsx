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
  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
      return visibleGoods;
  }

  if (isReversed) {
    visibleGoods = visibleGoods.reverse();
  }

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
  state: State = defaultState;

  reverseOrder = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  sortGoods = (sortType: SortType) => {
    this.setState(() => {
      return {
        sortType: sortType,
      };
    });
  };

  sortReset = () => {
    this.setState(() => {
      return defaultState;
    });
  };

  stateChanged = () => {
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
            onClick={() => this.sortGoods(SortType.ALPHABET)}
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={() => this.sortGoods(SortType.LENGTH)}
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

          {this.stateChanged() && (
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
